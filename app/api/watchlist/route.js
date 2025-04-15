export const runtime = 'nodejs';
import { getDb } from '@/app/api/db';
import { saveDb } from '@/app/api/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const token = req.headers.get('Authorization');
  const db = await getDb();

  if (!db?.data?.users) {
    return NextResponse.json(
      { msg: 'Database structure invalid' },
      { status: 500 },
    );
  }

  const { users } = db.data;

  const user = users.find((user) => user.token === token);

  if (!user) {
    return NextResponse.json(
      { msg: 'Could not retrieve watchlist, please try again.' },
      { status: 400 },
    );
  }

  const { username, watchlist } = user;

  return NextResponse.json({ username, watchlist }, { status: 200 });
}
export async function PUT(req) {
  const body = await req.json();
  const token = req.headers.get('Authorization');
  const { watchlistItem } = body;
  const db = await getDb();
  const { users } = db.data;

  const user = users.find((user) => user.token === token);

  if (!user) {
    return NextResponse.json(
      { msg: 'Could not update watchlist, please try again.' },
      { status: 400 },
    );
  }

  const { watchlist } = user;
  const isAlreadyOnWatchlist = watchlist.some(
    (item) => item.imdbID === watchlistItem.imdbID,
  );

  if (isAlreadyOnWatchlist) {
    return NextResponse.json(
      { msg: 'Item is already on your Watchlist.' },
      { status: 400 },
    );
  }

  try {
    watchlist.push(watchlistItem);
    await saveDb(db.data);
    return NextResponse.json(
      {
        msg: `${watchlistItem.title} successfully added to Watchlist.`,
        watchlist,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: `Something went wrong. Please try adding ${watchlistItem.title} again.`,
        error,
      },
      { status: 500 },
    );
  }
}
export async function DELETE(req) {
  const body = await req.json();
  const token = req.headers.get('Authorization');
  const { watchlistItemId } = body;
  const db = await getDb();
  const { users } = db.data;

  const user = users.find((user) => user.token === token);

  if (!user) {
    return NextResponse.json(
      {
        msg: 'Could not remove requested item, please try again.',
      },
      { status: 400 },
    );
  }

  try {
    const { watchlist } = user;
    user.watchlist = user.watchlist.filter(
      (item) => item.imdbID !== watchlistItemId,
    );
    await saveDb(db.data); // Updated to ensure correct payload structure
    return NextResponse.json(
      {
        msg: 'Successfully deleted item from Watchlist.',
        watchlist,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: `Something went wrong. Please try removing it again.`,
        error,
      },
      { status: 500 },
    );
  }
}

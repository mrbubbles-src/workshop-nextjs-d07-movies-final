import { getDb } from '@/lib/lowdb';
import { NextResponse } from 'next/server';

// ? „Login prüft, ob der User in unserer fake-DB existiert, und ob das Passwort stimmt.
// ? Wenn ja, kriegen wir das Token, das wir später in localStorage speichern – als Fake-Login-Zeichen.
export async function POST(req) {
  const body = await req.json();
  const { username, password } = body;
  const db = await getDb();
  const { users } = db;

  const user = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    return NextResponse.json(
      { msg: 'Wrong Username or Password' },
      { status: 401 },
    );
  }

  try {
    const { username, token, watchlist } = user;
    return NextResponse.json(
      {
        msg: 'Success, you will be redirected momentarily.',
        username,
        token, // ? Im Backend schicken wir eher nur das Token zurück, welches diverse Infos enthält.
        watchlist, // ? Würden wir wahrscheinlich eher später über eine gesonderte route fetchen.
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { msg: 'Login failed. This is on us, please try again.', error },
      { status: 500 },
    );
  }
}

export const runtime = 'nodejs';
import { getDb } from '@/app/api/lowdb';
import { NextResponse } from 'next/server';

// ? „Login prüft, ob der User in unserer fake-DB existiert, und ob das Passwort stimmt.
// ? Wenn ja, kriegen wir das Token, das wir später in localStorage speichern – als Fake-Login-Zeichen.
export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { msg: 'Invalid JSON in request' },
      { status: 400 },
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { msg: 'Missing or invalid request body' },
      { status: 400 },
    );
  }

  const { username, password } = body;
  const db = await getDb();

  if (!db?.data?.users) {
    return NextResponse.json(
      { msg: 'Database structure invalid' },
      { status: 500 },
    );
  }

  const { users } = db.data;

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
    const { token } = user;
    return NextResponse.json(
      {
        msg: 'Success, you will be redirected momentarily.',
        token, // ? Im Backend schicken wir eher nur das Token zurück, welches diverse Infos enthält.
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

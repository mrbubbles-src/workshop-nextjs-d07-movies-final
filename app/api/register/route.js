import { getDb } from '@/lib/lowdb';
import { NextResponse } from 'next/server';

// ? Generiert ein fake Sicherheitstoken, welches wir zum überprüfen des Login-Status nutzen
function generateToken(length = 8) {
  const tokenChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += tokenChars[Math.floor(Math.random() * tokenChars.length)];
  }
  return token;
}

export async function POST(req) {
  const body = await req.json();
  const { username, email, password } = body;
  const db = await getDb();
  const { users } = db.data;

  const checkDupeUser = users.find(
    (user) => user.email === email || user.username === username,
  );

  if (checkDupeUser) {
    return NextResponse.json(
      { error: 'User with the same email or username already exists' },
      { status: 400 },
    );
  }

  try {
    const token = generateToken(16);
    /**
     * !  ❗ WARNUNG: Passwort wird unverschlüsselt gespeichert!
     *
     * !  🔐 Das ist ** nur für den Workshop ** okay!
     * !      Warum? Weil wir (noch) kein Backend-Modul haben.
     *
     * !  ❗ In echten Anwendungen MUSS das Passwort verschlüsselt werden!
     * !      → z. B. mit bcrypt oder ähnlichen Tools.
     *
     * !  📚 Mehr dazu folgt im Backend-Modul.
     * !  👉 Merksatz:
     * !      Heute = ausnahmsweise okay ✅
     * !      Normalerweise = NIEMALS unverschlüsselt! ❌
     */
    const newUser = { username, email, password, token, watchlist: [] };
    users.push(newUser);
    await db.write();
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        msg: 'Something went wrong. Could not register User. Please try again.',
        error,
      },
      { status: 500 },
    );
  }
}

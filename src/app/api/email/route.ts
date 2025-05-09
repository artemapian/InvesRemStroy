// src/app/api/email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_YkiqWhqV_GEpvo6XnRtMNMEVFUazEQsY1");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, comment } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'artemapiyn2002@gmail.com',
      subject: 'Заявка с сайта на аренду спецтехники / доставку строй материалов',
      html: `
        <div style="font-size: 17px"><strong>Имя</strong> <p style="font-size: 20px">${name}</p></div>
        <div style="font-size: 17px"><strong>Телефон</strong> <p style="font-size: 20px">${phone}</p></div>
        <div style="font-size: 17px"><strong>Комментарий</strong> <p style="font-size: 20px">${comment || '-'}</p></div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

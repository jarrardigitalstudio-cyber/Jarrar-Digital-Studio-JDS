import { NextRequest, NextResponse } from 'next/server';
import { validateOrderForm } from '@/lib/validation';
import { sendOrderInquiryEmails } from '@/lib/email';
import { OrderFormData } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body: OrderFormData = await req.json();

    const errors = validateOrderForm(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    const emailResult = await sendOrderInquiryEmails(body);

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your inquiry.",
      provider: emailResult.provider,
    });
  } catch (error: any) {
    console.error('Order API error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format as formatDateFns, isValid as isValidDate, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: 'accurate' | 'normal';
  } = {}
) {
  const { decimals = 0, sizeType = 'normal' } = opts;

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === 'accurate'
      ? (accurateSizes[i] ?? 'Bytest')
      : (sizes[i] ?? 'Bytes')
  }`;
}

export function formatDate(
  input: Date | string | number | null | undefined,
  pattern = 'dd MMM yyyy'
): string {
  if (input == null) return '';

  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else if (typeof input === 'string') {
    // Try ISO parse first; if that fails, let Date constructor try
    const isoParsed = parseISO(input);
    date = isValidDate(isoParsed) ? isoParsed : new Date(input);
  } else {
    date = new Date(input);
  }

  if (!isValidDate(date)) return '';

  return formatDateFns(date, pattern);
}

export function formatTimeDiff(from: Date, to: Date) {
  const diffMs = Math.abs(from.getTime() - to.getTime());
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  return `${days}d`;
}

export function formatDateTimeLong(dateString: string) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return date.toLocaleString(undefined, options);
}

export function formatKenyanPhoneNumber(phone: string | null | undefined): string | null {
  if (!phone) return null;

  // 1. Aggressively remove EVERYTHING except digits and the plus sign
  const cleaned = phone.replace(/[^\d+]/g, '');

  // 2. Format Kenyan variations specifically
  if (cleaned.startsWith('+254') && cleaned.length === 13) return cleaned;
  if (cleaned.startsWith('0') && cleaned.length === 10) return `+254${cleaned.substring(1)}`;
  if (cleaned.startsWith('254') && cleaned.length === 12) return `+${cleaned}`;
  if ((cleaned.startsWith('7') || cleaned.startsWith('1')) && cleaned.length === 9) return `+254${cleaned}`;

  if (/^\+[1-9]\d{6,14}$/.test(cleaned)) return cleaned;

  return null; 
}
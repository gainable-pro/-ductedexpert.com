import { redirect } from 'next/navigation';
import { getServerLocale } from '@/lib/server-locale';
import { withLocalePath } from '@/lib/i18n';

export default async function CgvRedirect() {
    const locale = await getServerLocale();
    redirect(withLocalePath('/terms-of-sale', locale));
}

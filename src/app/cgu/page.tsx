import { redirect } from 'next/navigation';
import { getServerLocale } from '@/lib/server-locale';
import { withLocalePath } from '@/lib/i18n';

export default async function CguRedirect() {
    const locale = await getServerLocale();
    redirect(withLocalePath('/terms-of-use', locale));
}

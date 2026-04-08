import { Redirect } from 'expo-router';
import { useAppContext } from '@/context/app-context';

export default function Index() {
  const { language, role } = useAppContext();

  if (!language) {
    return <Redirect href="/(auth)/language" />;
  }

  if (!role) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href={`/${`(${role})`}/dashboard`} />;
}

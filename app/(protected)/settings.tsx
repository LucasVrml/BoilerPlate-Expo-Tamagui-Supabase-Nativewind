import { View, Text } from 'react-native';
import Account from '../../components/Account';
import { useSupabase } from '../../context/supabase-provider';

export default function Tab() {

  const { session, user } = useSupabase();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Account key={user?.id} session={session}/>
    </View>
  );
}

import { H4, XStack, YStack, Button, Separator, Paragraph } from 'tamagui';
import { useRouter } from 'expo-router';

export default function TeleopScreen() {
  const router = useRouter();

  return (
    <YStack f={1} ai="center" jc="center" gap="$6" px="$10" pt="$5" pb="$10" bg="$background">
      <H4>ENDGAME SCREEN</H4>

      <Button onPress={() => router.push('/match-scouting')}>
        Continue
      </Button>
    </YStack>
  );
}
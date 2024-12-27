
import { H4, XStack, YStack, Button, Separator, Paragraph } from 'tamagui';
import { useRouter } from 'expo-router';

export default function AutonScreen() {
  const router = useRouter();

  return (
    <YStack f={1} ai="center" jc="center" gap="$6" px="$10" pt="$5" pb="$10" bg="$background">
      <H4>AUTON SCREEN</H4>

      <Button onPress={() => router.push('/match-scouting-tele')}>
        Continue
      </Button>
    </YStack>
  );
}
import { H2, XStack, YStack, Button, Separator, Paragraph } from 'tamagui';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <YStack f={1} ai="center" jc="center" gap="$6" px="$10" pt="$5" pb="$10" bg="$background">
      <H2>SharkScout</H2>

      <Separator marginVertical={5} borderColor="$color" width={'$5'} />

      <XStack ai="center" jc="center" fw="wrap" gap="$3">
        <YStack gap="$2">
          <Button themeInverse size="$5" onPress={() => router.push('/match-scouting')}>
            Match Scouting
          </Button>

          <Button themeInverse size="$5">
            Terminal Panel
          </Button>
        </YStack>
      </XStack>

      <Separator marginVertical={5} borderColor="$color" width={'$5'} /> 
      <YStack gap="$2" ai="center" jc="center">
        <Paragraph fontWeight="800">Details</Paragraph>

        <XStack>
          <Paragraph>Current Activated Comp: (</Paragraph>
          <Paragraph fontWeight="800">None)</Paragraph>
        </XStack>

        <XStack>
          <Paragraph>Current Scouter: (</Paragraph>
          <Paragraph fontWeight="800">None)</Paragraph>
        </XStack>

        <XStack>
          <Paragraph>App Version: (</Paragraph>
          <Paragraph fontWeight="800">1.0.0)</Paragraph>
        </XStack>
      </YStack>
    </YStack>
  );
}
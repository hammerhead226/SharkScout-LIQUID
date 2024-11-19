import { H2, Input, XStack, YStack, Button, Separator, Paragraph} from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard } from 'react-native'

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" jc="center" gap="$6" px="$10" pt="$5" pb="$10" bg="$background">
      <H2>SharkScout</H2>

      <Separator marginVertical={5} borderColor="$color" width={'$5'} />

      <XStack ai="center" jc="center" fw="wrap" gap="$3">
        <Button themeInverse size="$5">
          Match Scouting
        </Button>

        <Button themeInverse size="$5">
          Terminal Panel
        </Button>

        {/* <YStack
          width={300}
          minHeight={250}
          overflow="hidden"
          space="$2"
          margin="$3"
          padding="$2"
        >
          <NameInput size="$4" />

        </YStack> */}
      </XStack>
      <Separator marginVertical={5} borderColor="$color" width={'$5'}/>
      <YStack gap="$2" ai="center" jc="center" >
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
  )
}

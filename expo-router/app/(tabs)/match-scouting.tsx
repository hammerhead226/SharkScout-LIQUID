import { H4, Input, XStack, YStack, Button, Separator, Paragraph, View, ScrollView} from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard } from 'react-native'

export default function MatchScoutingScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
        <ScrollView>

        <H4 style={{ textAlign: 'center', marginTop: 20 }}>SharkScout</H4>

            <YStack
            width={300}
            minHeight={250}
            overflow="hidden"
            space="$2"
            margin="$3"
            padding="$2"
            >
            <NameInput size="$4" />
            <QualNum size="$4" />
            </YStack>
        </ScrollView>
    </View>
  )
}


function NameInput(props: { size: SizeTokens }) {
    return (
      <XStack alignItems="center" space="$2">
        <Input flex={1} size={props.size} placeholder={`Name`} />
        <Button size={props.size} onPress={() => Keyboard.dismiss()}>Go</Button>
      </XStack>
    )
  }

  function QualNum(props: { size: SizeTokens }) {
    return (
      <XStack alignItems="center" space="$2">
        <Input flex={1} size={props.size} placeholder={`Qual Number`} />
        <Button size={props.size} onPress={() => Keyboard.dismiss()}>Go</Button>
      </XStack>
    )
  }
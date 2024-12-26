import { H5, Input, XStack, YStack, Button, Separator, Paragraph, View, ScrollView, H2, H4, Text, useTheme} from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard } from 'react-native'
import { useState } from 'react'
import { useStore } from './../../zustand/hooks'

export default function TerminalPanelScreen() {
  const {scouter_name, set_scouter_name, alliance, set_alliance, driver_station, set_driver_station}: any = useStore()
  const theme = useTheme()

  return (
    <View flex={1} padding="$6" alignItems="center" justifyContent="center" bg="$background">
        <ScrollView >

          {/* Alliance */}
          <YStack
            marginBottom="$4"
            paddingLeft="$4"
            paddingRight="$4"
            paddingBottom="$4"
            bg="$background"
            borderRadius="$4"
            maxWidth={400} // Set a maximum width
            alignSelf="center" // Center it horizontally
            borderWidth={1}
            borderColor="$gray9"
          >
            <H5 paddingTop="$4" paddingBottom="$1">Alliance:</H5>
            <Text color="$gray10">Selects which Alliance this tablet is scouting.</Text>

            <XStack gap="$5" width={"100%"} justifyContent="space-between" paddingTop="$4">
              <Button
                backgroundColor={alliance === "blue" ? "$blue10" : "transparent"}
                borderColor="$blue10"
                borderWidth={alliance === "blue" ? 0 : 3}
                size="$4"
                flex={1}
                onPress={() => set_alliance("blue")}
              >
                <H5 color={alliance === "blue" ? "#FFFFFF" : "$blue10"} fontWeight="bold">BLUE</H5>
              </Button>
              <Button
                backgroundColor={alliance === "red" ? "$red10" : "transparent"}
                borderColor="$red10"
                borderWidth={alliance === "red" ? 0 : 3}
                size="$4"
                flex={1}
                onPress={() => set_alliance("red")}
              >
                <H5 color={alliance === "red" ? "#FFFFFF" : "$red10"} fontWeight="bold">RED</H5>
              </Button>
            </XStack>
          </YStack>

          {/* Driver Station */}
          <YStack
            marginBottom="$4"
            bg="$background"
            paddingLeft="$4"
            paddingRight="$4"
            paddingBottom="$4"
            borderRadius="$4"
            maxWidth={400} // Set a maximum width
            alignSelf="center" // Center it horizontally
            borderWidth={1}
            borderColor="$gray9"
          >
            <H5 paddingTop="$4" paddingBottom="$1">Driver Station:</H5>
            <Text color="$gray10">Selects which Driver Station this tablet is scouting.</Text>

            <XStack gap="$5" width={"100%"} justifyContent="space-between" paddingTop="$4">
              <Button backgroundColor={driver_station == 1 ? "$green9" : "#FFFFFF"} borderColor={driver_station == 1 ? "$green9" : "$gray9"}  borderWidth={driver_station == 1 ? 0 : 3} size="$4" flex={1} onPress={() => set_driver_station(1)}><H5 color={driver_station == 1 ? "#FFFFFF" : "$gray10"} fontWeight="bold">{alliance === "blue" ? "B1" : "R1"}</H5></Button>
              <Button backgroundColor={driver_station == 2 ? "$green9" : "#FFFFFF"} borderColor={driver_station == 2 ? "$green9" : "$gray9"} borderWidth={driver_station == 2 ? 0 : 3} size="$4" flex={1} onPress={() => set_driver_station(2)}><H5 color={driver_station == 2 ? "#FFFFFF" : "$gray10"} fontWeight="bold">{alliance === "blue" ? "B2" : "R2"}</H5></Button>
              <Button backgroundColor={driver_station == 3 ? "$green9" : "#FFFFFF"} borderColor={driver_station == 3 ? "$green9" : "$gray9"} borderWidth={driver_station == 3 ? 0 : 3} size="$4" flex={1} onPress={() => set_driver_station(3)}><H5 color={driver_station == 3 ? "#FFFFFF" : "$gray10"} fontWeight="bold">{alliance === "blue" ? "B3" : "R3"}</H5></Button>
            </XStack>
          </YStack> 

          {/* Name */}
          <YStack
            marginBottom="$4"
            bg="$background"
            paddingLeft="$4"
            paddingRight="$4"
            paddingBottom="$4"
            borderRadius="$4"
            maxWidth={400} // Set a maximum width
            alignSelf="center" // Center it horizontally
            borderWidth={1}
            borderColor="$gray9"
          >
            <H5 paddingTop="$4" paddingBottom="$1">Name:</H5>
            <Text color="$gray10">Enter the name of the Scouter.</Text>

            <Input
              placeholder="Enter name"
              value={scouter_name}
              onChangeText={set_scouter_name}
              borderColor="$gray9"
              borderWidth={1}
              padding="$2"
              borderRadius="$2"
              marginTop="$2"
              width={300} // Set the desired width
            />
          </YStack>

          <YStack
            marginBottom="$4"
            bg="$background"
            paddingLeft="$4"
            paddingRight="$4"
            paddingBottom="$4"
            borderRadius="$4"
            maxWidth={400} // Set a maximum width
            alignSelf="center" // Center it horizontally
            borderWidth={1}
            borderColor="$gray9"
          >
            <H5 paddingTop="$4" paddingBottom="$1">Blue Alliance:</H5>
            <Text color="$gray10">Enter the TBA code for the competition</Text>

            <Input
              placeholder="Enter code"
              value={scouter_name}
              onChangeText={set_scouter_name}
              borderColor="$gray9"
              borderWidth={1}
              padding="$2"
              borderRadius="$2"
              marginTop="$2"
              width={300} // Set the desired width
            />

              <Button
                backgroundColor= "transparent"
                borderColor="$gray10"
                borderWidth= "$1"
                size="$4"
                flex={1}
                marginTop="$4"
              >
                <H5 fontWeight="bold">SUBMIT</H5>
              </Button>

          </YStack>

        </ScrollView>
    </View>
  )
}
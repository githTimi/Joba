import { Stack } from 'expo-router'
import { useCallback} from 'react'
import { useFonts} from 'expo-font' // need dis line for custom fonts
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();
const Layout= ()=>{
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

      const onLayoutRootview = useCallback(async ()=>{
        if(fontsLoaded){
            await SplashScreen.preventAutoHideAsync()
        }
      }, [fontsLoaded])

       if(!fontsLoaded) return null;
       return < Stack  onLayout={onLayoutRootview}/>
}

export default Layout
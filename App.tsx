// App.js
import React, { useState } from 'react'
import { View } from 'react-native'
import DriveGridContainer from './Common/HeaderContainer/driveGridContainer'
import ListData  from './Common/Data/listData'
import GridData from './Common/Data/gridData'

const App = () => {
  const [isGridMode, setIsGridMode] = useState(true);
  const toggleViewMode = () => {
    setIsGridMode(prevMode => !prevMode);
  };
  return (
    <View>
      <DriveGridContainer toggleViewMode={toggleViewMode} isGridMode={isGridMode} />
      {isGridMode ? <GridData /> : <ListData />}
    </View>
  )
}

export default App

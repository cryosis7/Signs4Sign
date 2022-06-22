import {
  Box,
  Button,
  createTheme,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Skeleton,
  styled,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Global } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { DrawerPuller } from "./DrawerPuller";

interface Props {
  vocabList: string[];
}

const drawerBleeding = 56;

export const VocabList = ({ vocabList }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const usingSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      {usingSmallScreen ? (
        <div style={{ height: "100%" }}>
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(60% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            onClose={() => setIsDrawerOpen(false)}
            onOpen={() => setIsDrawerOpen(true)}
            open={isDrawerOpen}
            ModalProps={{ keepMounted: true }}
            disableSwipeToOpen={false}
            swipeAreaWidth={drawerBleeding}
          >
            <DrawerPuller
              pullerHeight={drawerBleeding}
              clickHandler={() => setIsDrawerOpen(!isDrawerOpen)}
            />
            <nav aria-label="Vocabulary list contents">
              <List disablePadding sx={{ overflow: "scroll" }}>
                <ListSubheader>Vocabulary</ListSubheader>
                {vocabList.map((word) => (
                  <ListItem>
                    <ListItemText primary={word} />
                  </ListItem>
                ))}
              </List>
            </nav>
          </SwipeableDrawer>
        </div>
      ) : (
        <nav aria-label="Vocabulary list contents" style={{ minWidth: "15%" }}>
          <List disablePadding>
            <ListSubheader>Vocabulary</ListSubheader>
            {vocabList.map((word) => (
              <ListItem>
                <ListItemText primary={word} />
              </ListItem>
            ))}
          </List>
        </nav>
      )}
    </ThemeProvider>
  );
  //
  // return (
  //     <SwipeableDrawer
  //         anchor='left'
  //         onClose={() => setIsDrawerOpen(false)}
  //         onOpen={() => setIsDrawerOpen(false)}
  //         open={isDrawerOpen}
  //         ModalProps={{keepMounted: true}}
  //         disableSwipeToOpen={true}
  //     >
  //         <Typography>Just Some Text</Typography>
  //         <Skeleton variant='rectangular' height='100%' />
  //     </SwipeableDrawer>
  // )

  // return (<div className='flex'>
  //     {isDrawerOpen && (
  //         <nav aria-label="Vocabulary list contents">
  //             <List disablePadding>
  //                 <ListSubheader>Vocabulary</ListSubheader>
  //                 {vocabList.map((word) => (
  //                     <ListItem>
  //                         <ListItemText primary={word}/>
  //                     </ListItem>
  //                 ))}
  //             </List>
  //         </nav>
  //     )}
  //     <div className='debug' style={{position: 'fixed', height: '100%'}}>
  //         <IconButton onClick={toggleDrawer} aria-label={`${isDrawerOpen ? 'close' : 'open'} vocabulary list`}>
  //             {isDrawerOpen ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
  //         </IconButton>
  //     </div>
  // </div>)
};

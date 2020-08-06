import React from 'react'
import PlayListHeader from '../PlayListHeader';
import PlayListItems from './PlayListItems';
import NightMode from '../NightMode';
import StylePlaylist from '../styles/StylePlayList';

const PlayList = props => (
    <StylePlaylist>
        <NightMode/>
        <PlayListHeader/>
        <PlayListItems/>
    </StylePlaylist>
)


export default PlayList;
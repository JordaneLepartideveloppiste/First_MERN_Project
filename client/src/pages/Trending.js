import Card from '../components/Post/Card';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UidContext } from '../components/AppContext';
import LeftNav from '../components/LeftNav';
import { isEmpty } from '../components/Utils';
import Trends from '../components/Trends';
import FriendsHint from '../components/Profil/FriendsHint';

const Trending = () => {
    const uid = useContext(UidContext);
    const trendList =useSelector((state) => state.trendingReducer);

    return (
        <div className="trending-page">
            <LeftNav />
            <div className="main">
                <ul>
                    {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id}/>)}
                </ul>
            </div>
            <div className="right-part">
                <div className="right-part-container">
                    <Trends />
                    {uid && <FriendsHint />}
                </div>
            </div>
        </div>
    );
};

export default Trending;
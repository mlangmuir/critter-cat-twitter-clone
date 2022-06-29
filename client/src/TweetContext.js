import { useEffect, useState, createContext } from 'react';
import moment from 'moment';

export const TweetContext = createContext();

const TweetProvider = ({ children }) => {

    const initialState = [];

    const [tweetData, setTweetData] = useState(initialState);
    const [tweetById, setTweetById] = useState(initialState);
    const [loadError, setLoadError] = useState(false);
    const [postError, setPostError] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        fetch("/api/me/home-feed")
            .then((res) => res.json())
            .then((data) => {
                setTweetById(data.tweetsById)
                const mappedTweetData = data.tweetIds.map((item) => {
                    return {
                        follow: data.tweetsById[item].author.isBeingFollowedByYou,
                        avatarSrc: data.tweetsById[item].author.avatarSrc,
                        displayName: data.tweetsById[item].author.displayName,
                        handle: data.tweetsById[item].author.handle,
                        status: data.tweetsById[item].status,
                        mediaUrl: data.tweetsById[item].media[0]?.url,
                        timestamp: moment(data.tweetsById[item].timestamp).format('MMM Do'),
                        isRetweeted: data.tweetsById[item].isRetweeted,
                        profileId: data.tweetsById[item].author.handle,
                        tweetId: item,
                        retweetFrom: data.tweetsById[item].retweetFrom,
                        tweetsById: data.tweetById,
                        numRetweets: data.tweetsById,
                    };
                });
                setTweetData(mappedTweetData);
            }).catch((err) => {
                if (tweetData.length === 0) {
                    setLoadError(true);
                }
                setPostError(true);
            })
    },[tweetData]);

    return (
        <TweetContext.Provider
            value={{tweetData, tweetById, loadError, postError, setPostError, inputText, setInputText}}
        >
            {children}
        </TweetContext.Provider>
    );
}

export default TweetProvider;
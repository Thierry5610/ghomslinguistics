import React from 'react';
import Styles from './styles/news.module.scss'; // Import the SCSS module
import { FaFacebook, FaSearch } from 'react-icons/fa';

const newsData = [
    {
        id: 105,
        title: "Next School Start June 17, 2024",
        date: "August 8, 2024",
        author: "olivisang1987_atfm2v6",
        videoUrl: "https://www.facebook.com/watch/61550921667156/?ref=embed_video",
        description: (
            <>
                <span className={Styles.highlight}>🔴 Next school start June 17, 2024</span><br />
                At Ghoms Linguistics, we focus on an innovative teaching method aimed at developing your skills interactively and engagingly.
                <br />
                Throughout the session, we will organize a series of "cinema days" where...
            </>
        ),
        videoEmbed: (
            <iframe
                style={{ border: "none", overflow: "hidden" }}
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61550921667156%2Fvideos%2F846684723984608%2F&show_text=true&width=560&t=0"
                width="560" 
                height="429"  // Fixed missing quote
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen="allowFullScreen"
            />
        ),
        image: "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t39.30808-1/372903649_122096658788030722_8833849782764152270_n.jpg"
    },
    {
        id: 103,
        title: "Next Course Start on April 1",
        date: "August 8, 2024",
        author: "olivisang1987_atfm2v6",
        videoEmbed: (
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid03JkV1KtCDw6udTqWBuLXXGMPJphwKzEFYWGKNJhj3nveanY5XymTSwT8FtP5VYeSl%26id%3D61550921667156&show_text=true&width=500"
                width="500" 
                height="730" 
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        ),
    }
];

const News = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.newsContainer}>
                {newsData.map((news) => (
                    <NewsItem key={news.id} {...news} />
                ))}
            </div>
            <div className={Styles.sidebar}>
                <div className={Styles.searchBar}>
                    <input type="text" placeholder="Search..." className={Styles.searchInput} />
                    <FaSearch className={Styles.searchIcon} />
                </div>
                <div>
                    <h4>Recent Posts</h4>
                    <ul>
                        <li>Next School Start June 17, 2024</li>
                        <li>Next Course Start on April 1</li>
                    </ul>
                </div>
                <div>
                    <h4>Archives</h4>
                    <ul>
                        <li>August 2024</li>
                    </ul>
                </div>
                <div>
                    <h4>Categories</h4>
                    <ul>
                        <li>Uncategorized</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

function NewsItem({ title, date, author, videoEmbed, description }) {
    return (
        <article className={Styles.newsItem}>
            <header className={Styles.entryHeader}>
                <h2 className={Styles.entryTitle}>{title}</h2>
                <ul className={Styles.entryMeta}>
                    <li className={Styles.postedOn}>
                        <time className={Styles.entryDate}>{date}</time>
                    </li>
                    <li className={Styles.postedBy}>
                        by <span className={Styles.author}>{author}</span>
                    </li>
                </ul>
            </header>
            <div className={Styles.entryContent}>
                {videoEmbed}
                {/* <p>{description}</p> */}
            </div>
        </article>
    );
}

export default News;
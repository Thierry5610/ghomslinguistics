import React from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/news.module.scss'; 
import { FaSearch } from 'react-icons/fa';

const newsData = [
    {
        id: 105,
        titleKey: "nextSchoolStartTitle",
        dateKey: "nextSchoolStartDate",
        author: "olivisang1987_atfm2v6",
        videoUrl: "https://www.facebook.com/watch/61550921667156/?ref=embed_video",
        videoEmbed: (
            <iframe
                style={{ border: "none", overflow: "hidden" }}
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61550921667156%2Fvideos%2F846684723984608%2F&show_text=true&width=560&t=0"
                width="560" 
                height="429" 
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen
            />
        )
    },
    {
        id: 103,
        titleKey: "nextCourseStartTitle",
        dateKey: "nextSchoolStartDate",
        author: "olivisang1987_atfm2v6",
        videoEmbed: (
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid03JkV1KtCDw6udTqWBuLXXGMPJphwKzEFYWGKNJhj3nveanY5XymTSwT8FtP5VYeSl%26id%3D61550921667156&show_text=true&width=500"
                width="500" 
                height="730" 
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        )
    }
];

const News = () => {
    const { t } = useTranslation('news');

    return (
        <div className={Styles.container}>
            <div className={Styles.newsContainer}>
                {newsData.map((news) => (
                    <NewsItem 
                        key={news.id} 
                        title={t(news.titleKey)} 
                        date={t(news.dateKey)} 
                        author={news.author} 
                        videoEmbed={news.videoEmbed} 
                    />
                ))}
            </div>
            <div className={Styles.sidebar}>
                <div className={Styles.searchBar}>
                    <input 
                        type="text" 
                        placeholder={t('searchPlaceholder')} 
                        className={Styles.searchInput} 
                    />
                    <FaSearch className={Styles.searchIcon} />
                </div>
                <div>
                    <h4>{t('recentPosts')}</h4>
                    <ul>
                        <li>{t('nextSchoolStartTitle')}</li>
                        <li>{t('nextCourseStartTitle')}</li>
                    </ul>
                </div>
                <div>
                    <h4>{t('archives')}</h4>
                    <ul>
                        <li>{t('nextSchoolStartDate')}</li>
                    </ul>
                </div>
                <div>
                    <h4>{t('categories')}</h4>
                    <ul>
                        <li>{t('uncategorized')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

function NewsItem({ title, date, author, videoEmbed }) {
    const { t } = useTranslation('news');

    return (
        <article className={Styles.newsItem}>
            <header className={Styles.entryHeader}>
                <h2 className={Styles.entryTitle}>{title}</h2>
                <ul className={Styles.entryMeta}>
                    <li className={Styles.postedOn}>
                        <time className={Styles.entryDate}>{date}</time>
                    </li>
                    <li className={Styles.postedBy}>
                        {t('author')} <span className={Styles.author}>{author}</span>
                    </li>
                </ul>
            </header>
            <div className={Styles.entryContent}>
                {videoEmbed}
            </div>
        </article>
    );
}

export default News;

import styles from './Journal.module.css'

import NoticeCard from '../sub_components/NoticeCard'

function Journal () {
    return(
        <div className={styles.section_container}>

            <div className={styles.container}>

                <div className={styles.full_notice}>
                    <NoticeCard className={styles.notice_1} />
                </div>

                <div className={styles.small_notice}>
                <NoticeCard className={styles.notice_2} />
                <NoticeCard className={styles.notice_3} />
                <NoticeCard className={styles.notice_4} />
                <NoticeCard className={styles.notice_5} />
                </div>

            </div>

        </div>
    )
}

export default Journal
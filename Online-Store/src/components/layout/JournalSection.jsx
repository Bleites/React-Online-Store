import styles from './JournalSection.module.css'

import NoticeCard from '../sub_components/NoticeCard'
import LinkButton from '../sub_components/LinkButton'

function JournalSection () {
    return(
        <div className={styles.section_container}>

            <h2>Journal</h2>

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
            <LinkButton exact to="/journal" text="See the journal" />
                

        </div>
    )
}

export default JournalSection
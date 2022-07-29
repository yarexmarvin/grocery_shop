import Rating from 'shared/components/Rating/Rating';
import styles from './ProductFeedback.module.scss';

const fakeReviews = [
    {
        name: 'Мария',
        date: '22.02.2020',
        rating: 3,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum tempora laboriosam atque provident aliquid sunt minima eaque impedit iusto omnis. Assumenda, eum cupiditate!'
    },
    {
        name: 'Алексей',
        date: '22.02.2020',
        rating: 2,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Татьяна',
        date: '22.02.2020',
        rating: 5,
        text: 'Lorem ipsum, dolor sit elit!'
    },
    {
        name: 'Дмитрий',
        date: '22.02.2020',
        rating: 3,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum tempora laboriosam atque provident aliquid sunt minima eaque impedit iusto omnis. Assumenda, eum cupiditate!'
    },
]

const ProductFeedback = () => {

    const starStyle = {
        star: { margin: '0 2px' }
    }

    return <div className={styles.container}>
        <h2 className={styles.header}>Отзывы</h2>

        <div className={styles.feedback}>

            <div className={styles.overall}>
                <div className={styles.summary}><Rating style={starStyle} count={3} /> <p>4 из 5</p></div>
                <div><p>5</p><Rating style={starStyle} count={5} /><p>5</p></div>
                <div><p>4</p><Rating style={starStyle} count={4} /><p>2</p></div>
                <div><p>3</p><Rating style={starStyle} count={3} /><p>3</p></div>
                <div><p>2</p><Rating style={starStyle} count={2} /><p>4</p></div>
                <div><p>1</p><Rating style={starStyle} count={1} /><p>3</p></div>
            </div>


            <div>
                {
                    fakeReviews.map((review, index) => {
                        return <div key={`${index}-review`} className={styles.review}>
                            <div className={styles.review__name}>
                                <i className='icon-user' />
                                <p>{review.name}</p>
                            </div>
                            <div className={styles.review__rating}>
                                <Rating count={review.rating} />
                                <p>{review.date}</p>
                            </div>
                            <div className={styles.review__text}>{review.text}</div>
                        </div>
                    })
                }

            </div>
        </div>

    </div>
}

export default ProductFeedback;
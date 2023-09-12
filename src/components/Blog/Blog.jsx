import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {cover,title,author,author_img,posted_date,reading_time
    } = blog;
    return (
        <div>
            <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div>
                    <div>
                    <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <h4>{reading_time} min read</h4>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>{title}</h2>
            </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
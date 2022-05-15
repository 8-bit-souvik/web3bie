import styles from "../../styles/blogs.module.css";

export const Blogs = ({ blogData }) => {
  console.log(blogData.documents);

  const blogs = blogData.documents.map(blogCast);

  function blogCast(data) {
    // console.log(data);
    return (
      <div className={styles.blog}>
        <div className={styles.blog_image}>
          <img src={data.image} />
        </div>
        <div className={styles.blog_title}>{data.blog_title}</div>
        <div className={styles.blog_content}>{data.blog_content}</div>
      </div>
    );
  }

  return (
    <section id="blogs" className={styles.blogs}>
     {blogs}
    </section>
  );
};

export default Blogs;

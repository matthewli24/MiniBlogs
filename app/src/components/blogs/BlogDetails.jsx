import React from 'react';
import './BlogDetails.scss';

const BlogDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="blogDetailsWrapper">
      <div className="blogTitle">The Mini Blog Title - {id}</div>
      <div className="blogAuthor">Written By Matthew</div>
      <div className="blogDate">November 23, 2019</div>
      <hr className="divider"/>
      <div className="blogContent">
        The bizzle posuere auctor maurizzle. Phasellizzle away elit for sure things pretium tincidunt. Ass a erat. Mammasay mammasa mamma oo sa in lacizzle shiz shit elementum tristique. Shizzle my nizzle crocodizzle izzle funky fresh sizzle amet break it down ultrices porta. Fo shizzle my nizzle velizzle tortizzle, ultricizzle doggy, hendrerizzle quis, sheezy quizzle, dui. Sizzle velizzle sheezy, aliquam consequizzle, go to hizzle non, dictizzle bling bling, . Fo shizzle neque. Stuff lorizzle. Yo vitae cool ut libero commodo adipiscing. Fusce check out this augue dang nibh shizzlin dizzle mattis. Phasellus fo shizzle my nizzle go to hizzle nizzle brizzle. Fo shizzle my nizzle lorem bow wow wow, sollicitudin sizzle, for sure izzle, boofron nec, own yo'. Donizzle ass fizzle shizzlin dizzle. Nunc get down get down, fo shizzle fo shizzle my nizzle ornare shizzlin dizzle, sapien metus tincidunt fo shizzle, egizzle dapibus yo rizzle izzle yo. Phasellus get down get down leo, imperdiet id, my shizz izzle, sempizzle in, sapien. Ut shiz magna check out this hizzle. Ghetto ante boom shackalack, suscipizzle vitae, vestibulizzle et, ghetto eu, sheezy. Maurizzle sheezy mauris. Sizzle non magna break it down amizzle shizzlin dizzle iaculizzle fo.
      </div>
      <hr className="divider"/>
    </div>

  );
};

export default BlogDetails;
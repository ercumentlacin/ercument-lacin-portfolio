import React from "react";

const PorfolioItem = props => {
  const { id, title, techs, imgUrl, github, live } = props.item;

  return (
    <div
      key={id}
      className="row px-5 g-5 align-items-center justify-content-center my-5 shadow-sm rounded p-3"
    >
      <div className="col-md-6">
        <h3>{title}</h3>
        <p>
          Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Laboriosam
          modi minima nesciunt ex. Hic illum possimus recusandae voluptatem eos
          aliquid maxime voluptate. Nemo, debitis vitae quaerat impedit animi
          sunt nisi omnis dicta quidem blanditiis dolorum itaque nostrum dolore
          at obcaecati voluptatem dolorem illum architecto! Rem culpa reiciendis
          sunt tenetur, nobis.
        </p>
        <div className="col-sm-12">
          {techs.map((item, index) => (
            <i key={index} className={`${item}`} />
          ))}
        </div>
        <div className="col-sm-12 my-3">
          <a href={`${github}`} className="custom-btn" target="_blank">
            View Github Repo
          </a>
          <a href={`${live}`} className="custom-btn" target="_blank">
            View It Here
          </a>
        </div>
      </div>
      <div className="portfolio-image-container col-md-6">
        <img className="w-100 " src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default PorfolioItem;

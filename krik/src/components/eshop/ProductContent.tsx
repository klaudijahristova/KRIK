import { ProductContentProps } from "src/interfaces/EShop";
import { useProductHeartToggle } from "src/services/functions";

function ProductContent({ title, content, price }: ProductContentProps) {
  const {
    heartSrc,
    bgColor,
    handleHeartClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useProductHeartToggle();

  return (
    <div className="row">
      <div className="col-8">
        <h3 className="mulish fs-48 fw-800 lh-64 xl-subtitle">{title}</h3>
        <p className="Montserrat fs-20 fw-400 lh-40 xl-content-26">{content}</p>
      </div>
      <div className="col-4 ">
        <p className="mulish fs-48 fw-800 lh-64 text-end singleProductPrice">
          {price} MKD
        </p>
        <div className=" d-flex w-100 align-items-center justify-content-end">
          <img
            src={heartSrc}
            alt="Heart"
            className="heartWhite rounded-circle me-4"
            onClick={handleHeartClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: bgColor }}
          />
          <a
            href={``}
            className="text-decoration-none mulish fs-24 fw-700 lh-32 custom-bg-color-05 custom-color-01  r-30 sp-KupiBtn text-center"
          >
            Купи
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;

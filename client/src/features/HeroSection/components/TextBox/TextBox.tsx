import "./text_box.scss";
import Image from "next/image";

export const TextBox = () => {
  return (
    <>
      <div className="text-box">
        <span className="text">
          A place to share UI ideas, design details,
          <br />
          and the thinking behind them.
        </span>

        <span className="admin">
          <Image
            src="/images/blue_avatar_image_rounded.svg"
            alt="Admin"
            height={20}
            width={20}
            style={{ borderRadius: "999px" }}
          />
          <p className="admin-start">Created by</p>
          <a href="https://nilanshugarhewal.vercel.app/" className="admin-end">
            Nilanshu Garhewal
          </a>
        </span>
      </div>
    </>
  );
};

import { FC, useState } from "react";
import { Post } from "../../utils/constants/types";
import { mockStatusByPostIndex } from "../../utils/common";
import styles from "./Accordion.module.css";

interface Props {
  post: Post;
  onPostRemove: () => void;
}

export const Accordion: FC<Props> = ({ post, onPostRemove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  const handleContentClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
  };
  const handleCTAButtonsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const onDelete = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setIsDeleted(true);

    setTimeout(() => {
      onPostRemove();
    }, 500);

    e.stopPropagation();
  };

  const mockSubject = () => post.body.split(" ")[0];

  const mockDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");

    return `${day}/${month} ${hours}:${minutes}`;
  };

  return (
    <div
      className={`rounded-lg mb-10 cursor-pointer ${styles.post} ${
        isDeleted ? styles["fade-out"] : ""
      } ${styles.shadow}`}
      style={{ background: isOpen ? "#3b82f63d" : "inherit" }}
      onClick={toggleCard}
    >
      <div
        className="rounded-lg p-6 flex justify-between items-center"
        style={{ background: "#3b82f614" }}
      >
        <div className="flex items-center">
          <div
            className={`rounded-lg border text-white font-medium text-xs min-w-10 mr-2 ${mockStatusByPostIndex(
              post.id
            )}`}
          >
            Status
          </div>
          <div
            className={`text-lg font-bold  mr-2 capitalize ${styles["truncate-text"]}`}
          >
            #{post.id} {post.title}
          </div>

          {!isOpen && (
            <div className="ml-6 font-semibold  w-40">
              Subject: <span>{mockSubject()}</span>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <span className="font-semibold p-2 rounded-lg bg-blue-900 text-white mr-2 min-w-28">
            {mockDate()}
          </span>
          <span className="material-icons p-2 rounded-full hover:bg-white hover:p-2 mr-0.5">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
          <span
            onClick={onDelete}
            className="material-icons p-2 rounded-full hover:bg-white hover:p-2 text-red-500"
          >
            delete
          </span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 p-4" : "max-h-0 p-0"
        }`}
      >
        {isOpen && (
          <div className="p-4 pl-16">
            <div
              className="cursor-text capitalize"
              onClick={handleContentClick}
            >
              {post.body}
            </div>
            <div
              className="cursor-text capitalize text-sm text-gray-400"
              onClick={handleContentClick}
            >
              {post.title}
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex flex-col gap-8">
                <button
                  onClick={handleCTAButtonsClick}
                  className={`${styles.button} bg-blue-500 text-white hover:bg-blue-600 transition`}
                >
                  CTA Button #1
                </button>
                <button
                  onClick={handleCTAButtonsClick}
                  className={`${styles.button} bg-gray-500 text-white  hover:bg-gray-600 transition`}
                >
                  CTA Button #2
                </button>
                <button
                  onClick={handleCTAButtonsClick}
                  className={`${styles.button} "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition`}
                >
                  CTA Button #3
                </button>
              </div>
              <div>
                <button
                  onClick={handleCTAButtonsClick}
                  className={`${styles.button} bg-red-500 text-white hover:bg-red-700 transition`}
                >
                  Button #4
                </button>
                <button
                  onClick={handleCTAButtonsClick}
                  className={`${styles.button} "border-blue-500 text-red-500 hover:bg-red-500 hover:text-white transition`}
                >
                  Button #5
                </button>
              </div>
              <div>
                <span>Just some text</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import { Button } from "bootstrap";
import React from "react";
import { Container, List, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="chat-cnt">
        <div>
          <Link to="/" className="link-items">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="maze-svg"
            >
              <path
                d="M26.6667 3.33333V6.66667H20V3.33333H26.6667ZM10 3.33333V13.3333H3.33333V3.33333H10ZM26.6667 16.6667V26.6667H20V16.6667H26.6667ZM10 23.3333V26.6667H3.33333V23.3333H10ZM30 0H16.6667V10H30V0ZM13.3333 0H0V16.6667H13.3333V0ZM30 13.3333H16.6667V30H30V13.3333ZM13.3333 20H0V30H13.3333V20Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/home" className="link-items">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="home-svg"
            >
              <path
                d="M26.7295 12.7949L15.4092 1.48042L14.6504 0.721631C14.4775 0.549883 14.2437 0.453491 14 0.453491C13.7563 0.453491 13.5225 0.549883 13.3496 0.721631L1.27051 12.7949C1.09335 12.9713 0.953344 13.1815 0.858746 13.413C0.764148 13.6444 0.716878 13.8925 0.719726 14.1425C0.731445 15.1738 1.58984 15.997 2.62109 15.997H3.86621V25.539H24.1338V15.997H25.4053C25.9062 15.997 26.3779 15.8007 26.7324 15.4462C26.907 15.2723 27.0453 15.0654 27.1393 14.8376C27.2334 14.6097 27.2813 14.3655 27.2803 14.1191C27.2803 13.621 27.084 13.1494 26.7295 12.7949ZM15.6406 23.4296H12.3594V17.4531H15.6406V23.4296ZM22.0244 13.8876V23.4296H17.5156V16.75C17.5156 16.1025 16.9912 15.5781 16.3437 15.5781H11.6562C11.0088 15.5781 10.4844 16.1025 10.4844 16.75V23.4296H5.97559V13.8876H3.16309L14.0029 3.05659L14.6797 3.73335L24.8398 13.8876H22.0244Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/message" className="link-items">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="msg-svg"
            >
              <path
                d="M9.375 15C9.375 15.4973 9.17746 15.9742 8.82582 16.3258C8.47419 16.6775 7.99728 16.875 7.5 16.875C7.00272 16.875 6.52581 16.6775 6.17417 16.3258C5.82254 15.9742 5.625 15.4973 5.625 15C5.625 14.5027 5.82254 14.0258 6.17417 13.6742C6.52581 13.3225 7.00272 13.125 7.5 13.125C7.99728 13.125 8.47419 13.3225 8.82582 13.6742C9.17746 14.0258 9.375 14.5027 9.375 15V15ZM16.875 15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875C14.5027 16.875 14.0258 16.6775 13.6742 16.3258C13.3225 15.9742 13.125 15.4973 13.125 15C13.125 14.5027 13.3225 14.0258 13.6742 13.6742C14.0258 13.3225 14.5027 13.125 15 13.125C15.4973 13.125 15.9742 13.3225 16.3258 13.6742C16.6775 14.0258 16.875 14.5027 16.875 15ZM22.5 16.875C22.9973 16.875 23.4742 16.6775 23.8258 16.3258C24.1775 15.9742 24.375 15.4973 24.375 15C24.375 14.5027 24.1775 14.0258 23.8258 13.6742C23.4742 13.3225 22.9973 13.125 22.5 13.125C22.0027 13.125 21.5258 13.3225 21.1742 13.6742C20.8225 14.0258 20.625 14.5027 20.625 15C20.625 15.4973 20.8225 15.9742 21.1742 16.3258C21.5258 16.6775 22.0027 16.875 22.5 16.875V16.875Z"
                fill="white"
              />
              <path
                d="M4.05937 29.6306L4.09687 29.6231C7.52812 28.9425 9.62437 28.0444 10.5994 27.5513C12.0349 27.9341 13.5143 28.127 15 28.125C23.2838 28.125 30 22.2487 30 15C30 7.75125 23.2838 1.875 15 1.875C6.71625 1.875 0 7.75125 0 15C0 18.3 1.39313 21.3188 3.69375 23.625C3.5328 25.1064 3.20316 26.5646 2.71125 27.9713L2.70562 27.9919C2.56583 28.3948 2.41325 28.7931 2.24813 29.1862C2.1 29.535 2.38688 29.925 2.76 29.865C3.19437 29.7939 3.62755 29.7158 4.05937 29.6306V29.6306ZM5.55937 23.8031C5.58564 23.5286 5.55103 23.2517 5.45802 22.9921C5.365 22.7325 5.21587 22.4966 5.02125 22.3013C3.03375 20.3063 1.875 17.7525 1.875 15C1.875 9.015 7.5075 3.75 15 3.75C22.4925 3.75 28.125 9.015 28.125 15C28.125 20.9869 22.4925 26.25 15 26.25C13.6783 26.2519 12.3621 26.0805 11.085 25.74C10.6387 25.6204 10.164 25.6698 9.75188 25.8788C9.02625 26.2463 7.42687 26.9475 4.81312 27.5531C5.17777 26.329 5.4276 25.0736 5.55937 23.8031V23.8031Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/setting" className="link-items">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id=""
            >
              <path d="M24.2499 18.75C24.0835 19.127 24.0339 19.5452 24.1074 19.9507C24.181 20.3562 24.3743 20.7304 24.6624 21.025L24.7374 21.1C24.9699 21.3322 25.1543 21.6079 25.2801 21.9114C25.4059 22.2149 25.4707 22.5402 25.4707 22.8687C25.4707 23.1973 25.4059 23.5226 25.2801 23.8261C25.1543 24.1296 24.9699 24.4053 24.7374 24.6375C24.5053 24.8699 24.2295 25.0543 23.926 25.1801C23.6225 25.306 23.2972 25.3707 22.9687 25.3707C22.6401 25.3707 22.3148 25.306 22.0113 25.1801C21.7078 25.0543 21.4321 24.8699 21.1999 24.6375L21.1249 24.5625C20.8303 24.2743 20.4562 24.081 20.0507 24.0075C19.6452 23.934 19.227 23.9836 18.8499 24.15C18.4802 24.3085 18.1649 24.5716 17.9428 24.9069C17.7207 25.2423 17.6015 25.6353 17.5999 26.0375V26.25C17.5999 26.913 17.3365 27.5489 16.8677 28.0178C16.3989 28.4866 15.763 28.75 15.0999 28.75C14.4369 28.75 13.801 28.4866 13.3322 28.0178C12.8633 27.5489 12.5999 26.913 12.5999 26.25V26.1375C12.5903 25.7238 12.4563 25.3225 12.2156 24.9859C11.9748 24.6493 11.6384 24.3929 11.2499 24.25C10.8729 24.0836 10.4547 24.034 10.0492 24.1075C9.64371 24.181 9.26954 24.3743 8.97494 24.6625L8.89994 24.7375C8.66776 24.9699 8.39203 25.1543 8.08854 25.2801C7.78504 25.406 7.45973 25.4707 7.13119 25.4707C6.80265 25.4707 6.47733 25.406 6.17384 25.2801C5.87034 25.1543 5.59462 24.9699 5.36244 24.7375C5.13 24.5053 4.9456 24.2296 4.81979 23.9261C4.69398 23.6226 4.62922 23.2973 4.62922 22.9687C4.62922 22.6402 4.69398 22.3149 4.81979 22.0114C4.9456 21.7079 5.13 21.4322 5.36244 21.2L5.43744 21.125C5.72561 20.8304 5.91892 20.4562 5.99244 20.0507C6.06597 19.6452 6.01633 19.227 5.84994 18.85C5.69148 18.4803 5.42838 18.165 5.09302 17.9429C4.75766 17.7208 4.36467 17.6016 3.96244 17.6H3.74994C3.0869 17.6 2.45101 17.3366 1.98217 16.8678C1.51333 16.3989 1.24994 15.763 1.24994 15.1C1.24994 14.437 1.51333 13.8011 1.98217 13.3322C2.45101 12.8634 3.0869 12.6 3.74994 12.6H3.86244C4.27618 12.5903 4.67744 12.4564 5.01406 12.2156C5.35068 11.9749 5.60708 11.6384 5.74994 11.25C5.91633 10.873 5.96597 10.4548 5.89244 10.0493C5.81892 9.64377 5.62561 9.2696 5.33744 8.975L5.26244 8.9C5.03 8.66782 4.8456 8.3921 4.71979 8.0886C4.59398 7.7851 4.52922 7.45979 4.52922 7.13125C4.52922 6.80271 4.59398 6.47739 4.71979 6.1739C4.8456 5.8704 5.03 5.59468 5.26244 5.3625C5.49462 5.13006 5.77034 4.94566 6.07384 4.81985C6.37733 4.69404 6.70265 4.62928 7.03119 4.62928C7.35973 4.62928 7.68504 4.69404 7.98854 4.81985C8.29203 4.94566 8.56776 5.13006 8.79994 5.3625L8.87494 5.4375C9.16954 5.72567 9.54371 5.91898 9.9492 5.99251C10.3547 6.06603 10.7729 6.01639 11.1499 5.85H11.2499C11.6196 5.69155 11.935 5.42844 12.1571 5.09308C12.3791 4.75772 12.4983 4.36473 12.4999 3.9625V3.75C12.4999 3.08696 12.7633 2.45107 13.2322 1.98223C13.701 1.51339 14.3369 1.25 14.9999 1.25C15.663 1.25 16.2989 1.51339 16.7677 1.98223C17.2365 2.45107 17.4999 3.08696 17.4999 3.75V3.8625C17.5015 4.26473 17.6207 4.65772 17.8428 4.99308C18.0649 5.32844 18.3802 5.59155 18.7499 5.75C19.127 5.91639 19.5452 5.96603 19.9507 5.89251C20.3562 5.81898 20.7303 5.62567 21.0249 5.3375L21.0999 5.2625C21.3321 5.03006 21.6078 4.84566 21.9113 4.71985C22.2148 4.59404 22.5401 4.52928 22.8687 4.52928C23.1972 4.52928 23.5225 4.59404 23.826 4.71985C24.1295 4.84566 24.4053 5.03006 24.6374 5.2625C24.8699 5.49468 25.0543 5.7704 25.1801 6.0739C25.3059 6.37739 25.3707 6.70271 25.3707 7.03125C25.3707 7.35979 25.3059 7.6851 25.1801 7.9886C25.0543 8.2921 24.8699 8.56782 24.6374 8.8L24.5624 8.875C24.2743 9.1696 24.081 9.54377 24.0074 9.94926C23.9339 10.3548 23.9835 10.773 24.1499 11.15V11.25C24.3084 11.6197 24.5715 11.935 24.9069 12.1571C25.2422 12.3792 25.6352 12.4984 26.0374 12.5H26.2499C26.913 12.5 27.5489 12.7634 28.0177 13.2322C28.4865 13.7011 28.7499 14.337 28.7499 15C28.7499 15.663 28.4865 16.2989 28.0177 16.7678C27.5489 17.2366 26.913 17.5 26.2499 17.5H26.1374C25.7352 17.5016 25.3422 17.6208 25.0069 17.8429C24.6715 18.065 24.4084 18.3803 24.2499 18.75V18.75Z" />
            </svg>
          </Link>
        </div>
        <div id="logout-div">
          <Link to="/logout" className="link-items">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="setting-svg">
<path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.2499 18.75C24.0835 19.127 24.0339 19.5452 24.1074 19.9507C24.181 20.3562 24.3743 20.7304 24.6624 21.025L24.7374 21.1C24.9699 21.3322 25.1543 21.6079 25.2801 21.9114C25.4059 22.2149 25.4707 22.5402 25.4707 22.8687C25.4707 23.1973 25.4059 23.5226 25.2801 23.8261C25.1543 24.1296 24.9699 24.4053 24.7374 24.6375C24.5053 24.8699 24.2295 25.0543 23.926 25.1801C23.6225 25.306 23.2972 25.3707 22.9687 25.3707C22.6401 25.3707 22.3148 25.306 22.0113 25.1801C21.7078 25.0543 21.4321 24.8699 21.1999 24.6375L21.1249 24.5625C20.8303 24.2743 20.4562 24.081 20.0507 24.0075C19.6452 23.934 19.227 23.9836 18.8499 24.15C18.4802 24.3085 18.1649 24.5716 17.9428 24.9069C17.7207 25.2423 17.6015 25.6353 17.5999 26.0375V26.25C17.5999 26.913 17.3365 27.5489 16.8677 28.0178C16.3989 28.4866 15.763 28.75 15.0999 28.75C14.4369 28.75 13.801 28.4866 13.3322 28.0178C12.8633 27.5489 12.5999 26.913 12.5999 26.25V26.1375C12.5903 25.7238 12.4563 25.3225 12.2156 24.9859C11.9748 24.6493 11.6384 24.3929 11.2499 24.25C10.8729 24.0836 10.4547 24.034 10.0492 24.1075C9.64371 24.181 9.26954 24.3743 8.97494 24.6625L8.89994 24.7375C8.66776 24.9699 8.39203 25.1543 8.08854 25.2801C7.78504 25.406 7.45973 25.4707 7.13119 25.4707C6.80265 25.4707 6.47733 25.406 6.17384 25.2801C5.87034 25.1543 5.59462 24.9699 5.36244 24.7375C5.13 24.5053 4.9456 24.2296 4.81979 23.9261C4.69398 23.6226 4.62922 23.2973 4.62922 22.9687C4.62922 22.6402 4.69398 22.3149 4.81979 22.0114C4.9456 21.7079 5.13 21.4322 5.36244 21.2L5.43744 21.125C5.72561 20.8304 5.91892 20.4562 5.99244 20.0507C6.06597 19.6452 6.01633 19.227 5.84994 18.85C5.69148 18.4803 5.42838 18.165 5.09302 17.9429C4.75766 17.7208 4.36467 17.6016 3.96244 17.6H3.74994C3.0869 17.6 2.45101 17.3366 1.98217 16.8678C1.51333 16.3989 1.24994 15.763 1.24994 15.1C1.24994 14.437 1.51333 13.8011 1.98217 13.3322C2.45101 12.8634 3.0869 12.6 3.74994 12.6H3.86244C4.27618 12.5903 4.67744 12.4564 5.01406 12.2156C5.35068 11.9749 5.60708 11.6384 5.74994 11.25C5.91633 10.873 5.96597 10.4548 5.89244 10.0493C5.81892 9.64377 5.62561 9.2696 5.33744 8.975L5.26244 8.9C5.03 8.66782 4.8456 8.3921 4.71979 8.0886C4.59398 7.7851 4.52922 7.45979 4.52922 7.13125C4.52922 6.80271 4.59398 6.47739 4.71979 6.1739C4.8456 5.8704 5.03 5.59468 5.26244 5.3625C5.49462 5.13006 5.77034 4.94566 6.07384 4.81985C6.37733 4.69404 6.70265 4.62928 7.03119 4.62928C7.35973 4.62928 7.68504 4.69404 7.98854 4.81985C8.29203 4.94566 8.56776 5.13006 8.79994 5.3625L8.87494 5.4375C9.16954 5.72567 9.54371 5.91898 9.9492 5.99251C10.3547 6.06603 10.7729 6.01639 11.1499 5.85H11.2499C11.6196 5.69155 11.935 5.42844 12.1571 5.09308C12.3791 4.75772 12.4983 4.36473 12.4999 3.9625V3.75C12.4999 3.08696 12.7633 2.45107 13.2322 1.98223C13.701 1.51339 14.3369 1.25 14.9999 1.25C15.663 1.25 16.2989 1.51339 16.7677 1.98223C17.2365 2.45107 17.4999 3.08696 17.4999 3.75V3.8625C17.5015 4.26473 17.6207 4.65772 17.8428 4.99308C18.0649 5.32844 18.3802 5.59155 18.7499 5.75C19.127 5.91639 19.5452 5.96603 19.9507 5.89251C20.3562 5.81898 20.7303 5.62567 21.0249 5.3375L21.0999 5.2625C21.3321 5.03006 21.6078 4.84566 21.9113 4.71985C22.2148 4.59404 22.5401 4.52928 22.8687 4.52928C23.1972 4.52928 23.5225 4.59404 23.826 4.71985C24.1295 4.84566 24.4053 5.03006 24.6374 5.2625C24.8699 5.49468 25.0543 5.7704 25.1801 6.0739C25.3059 6.37739 25.3707 6.70271 25.3707 7.03125C25.3707 7.35979 25.3059 7.6851 25.1801 7.9886C25.0543 8.2921 24.8699 8.56782 24.6374 8.8L24.5624 8.875C24.2743 9.1696 24.081 9.54377 24.0074 9.94926C23.9339 10.3548 23.9835 10.773 24.1499 11.15V11.25C24.3084 11.6197 24.5715 11.935 24.9069 12.1571C25.2422 12.3792 25.6352 12.4984 26.0374 12.5H26.2499C26.913 12.5 27.5489 12.7634 28.0177 13.2322C28.4865 13.7011 28.7499 14.337 28.7499 15C28.7499 15.663 28.4865 16.2989 28.0177 16.7678C27.5489 17.2366 26.913 17.5 26.2499 17.5H26.1374C25.7352 17.5016 25.3422 17.6208 25.0069 17.8429C24.6715 18.065 24.4084 18.3803 24.2499 18.75V18.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Link>
        </div>
        <div id="logout-div">
          <Link to="/logout" className="link-items">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="logout-svg"
            >
              <path
                d="M7.5 2.5H18.75C19.413 2.5 20.0489 2.76339 20.5178 3.23223C20.9866 3.70107 21.25 4.33696 21.25 5V7.5H18.75V5H7.5V25H18.75V22.5H21.25V25C21.25 25.663 20.9866 26.2989 20.5178 26.7678C20.0489 27.2366 19.413 27.5 18.75 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5Z"
                fill="white"
              />
              <path
                d="M20.1125 19.4875L21.875 21.25L28.125 15L21.875 8.75L20.1125 10.5125L23.3375 13.75H11.25V16.25H23.3375L20.1125 19.4875Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className="box-border border-[0px] w-full h-auto mt-16 mb-16 relative items-center">
      <div className="box-border max-w-[40vh] ">
        <img src="images/Logo/homepage.png" alt="logo_img" className="absolute -top-1/2 pl-2" />
        <div className="box-border flex flex-col items-end pr-5 dark:invert">
          <svg width="194" height="20" viewBox="0 0 194 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.89986 19L0.489347 0.0909085H4.85653L7.98651 13.2294H8.14347L11.5966 0.0909085H15.3359L18.7798 13.2571H18.946L22.076 0.0909085H26.4432L21.0327 19H17.1364L13.5355 6.63707H13.3878L9.79617 19H5.89986ZM33.4487 19.277C31.9899 19.277 30.7342 18.9815 29.6816 18.3906C28.6352 17.7936 27.8289 16.9503 27.2626 15.8608C26.6963 14.7652 26.4132 13.4695 26.4132 11.9737C26.4132 10.5149 26.6963 9.23461 27.2626 8.13281C27.8289 7.03101 28.626 6.17235 29.6539 5.55682C30.688 4.94129 31.9006 4.63352 33.2917 4.63352C34.2273 4.63352 35.0983 4.78433 35.9047 5.08594C36.7172 5.38139 37.425 5.82765 38.0282 6.42472C38.6376 7.02178 39.1116 7.77273 39.4501 8.67756C39.7886 9.57623 39.9579 10.6288 39.9579 11.8352V12.9155H27.9828V10.478H36.2555C36.2555 9.91169 36.1324 9.41004 35.8862 8.97301C35.64 8.53598 35.2984 8.19437 34.8613 7.94815C34.4305 7.69579 33.9288 7.5696 33.3564 7.5696C32.7593 7.5696 32.2299 7.7081 31.7683 7.98508C31.3128 8.25592 30.9558 8.62216 30.6973 9.08381C30.4387 9.5393 30.3064 10.0471 30.3002 10.6072V12.9247C30.3002 13.6264 30.4295 14.2327 30.688 14.7436C30.9527 15.2545 31.3251 15.6484 31.8052 15.9254C32.2853 16.2024 32.8547 16.3409 33.5133 16.3409C33.9503 16.3409 34.3504 16.2794 34.7136 16.1562C35.0768 16.0331 35.3876 15.8485 35.6461 15.6023C35.9047 15.3561 36.1016 15.0545 36.237 14.6974L39.8748 14.9375C39.6902 15.8116 39.3116 16.5748 38.7392 17.2273C38.1729 17.8736 37.4404 18.3783 36.5417 18.7415C35.6492 19.0985 34.6182 19.277 33.4487 19.277ZM46.4579 0.0909085V19H42.5247V0.0909085H46.4579ZM56.0163 19.277C54.5637 19.277 53.3142 18.9692 52.2678 18.3537C51.2275 17.732 50.4273 16.8703 49.8672 15.7685C49.3132 14.6667 49.0362 13.3987 49.0362 11.9645C49.0362 10.5118 49.3163 9.23769 49.8764 8.14204C50.4427 7.04025 51.246 6.18158 52.2862 5.56605C53.3265 4.94437 54.5637 4.63352 55.9979 4.63352C57.2351 4.63352 58.3184 4.85819 59.2479 5.30753C60.1773 5.75686 60.9129 6.38778 61.4545 7.20028C61.9962 8.01278 62.2947 8.96686 62.3501 10.0625H58.6385C58.5339 9.35464 58.2569 8.78527 57.8075 8.3544C57.3643 7.91738 56.7827 7.69886 56.0625 7.69886C55.4531 7.69886 54.9207 7.86506 54.4652 8.19744C54.0159 8.52367 53.665 9.00071 53.4126 9.62855C53.1603 10.2564 53.0341 11.0166 53.0341 11.9091C53.0341 12.8139 53.1572 13.5833 53.4034 14.2173C53.6558 14.8513 54.0097 15.3345 54.4652 15.6669C54.9207 15.9993 55.4531 16.1655 56.0625 16.1655C56.5118 16.1655 56.915 16.0732 57.272 15.8885C57.6352 15.7038 57.9337 15.4361 58.1676 15.0852C58.4077 14.7282 58.5646 14.3004 58.6385 13.8018H62.3501C62.2886 14.8852 61.9931 15.8393 61.4638 16.6641C60.9406 17.4827 60.2173 18.1229 59.294 18.5845C58.3707 19.0462 57.2782 19.277 56.0163 19.277ZM71.2761 19.277C69.8419 19.277 68.6016 18.9723 67.5552 18.3629C66.515 17.7474 65.7117 16.8918 65.1454 15.7962C64.5791 14.6944 64.296 13.4171 64.296 11.9645C64.296 10.4995 64.5791 9.21922 65.1454 8.12358C65.7117 7.02178 66.515 6.16619 67.5552 5.55682C68.6016 4.94129 69.8419 4.63352 71.2761 4.63352C72.7103 4.63352 73.9475 4.94129 74.9877 5.55682C76.0342 6.16619 76.8405 7.02178 77.4068 8.12358C77.9731 9.21922 78.2562 10.4995 78.2562 11.9645C78.2562 13.4171 77.9731 14.6944 77.4068 15.7962C76.8405 16.8918 76.0342 17.7474 74.9877 18.3629C73.9475 18.9723 72.7103 19.277 71.2761 19.277ZM71.2946 16.2301C71.947 16.2301 72.4918 16.0455 72.9288 15.6761C73.3658 15.3007 73.6951 14.7898 73.9167 14.1435C74.1445 13.4972 74.2583 12.7616 74.2583 11.9368C74.2583 11.112 74.1445 10.3764 73.9167 9.73011C73.6951 9.08381 73.3658 8.57292 72.9288 8.19744C72.4918 7.82197 71.947 7.63423 71.2946 7.63423C70.6359 7.63423 70.082 7.82197 69.6326 8.19744C69.1895 8.57292 68.854 9.08381 68.6262 9.73011C68.4047 10.3764 68.2939 11.112 68.2939 11.9368C68.2939 12.7616 68.4047 13.4972 68.6262 14.1435C68.854 14.7898 69.1895 15.3007 69.6326 15.6761C70.082 16.0455 70.6359 16.2301 71.2946 16.2301ZM80.8137 19V4.81818H84.5623V7.32031H84.7285C85.024 6.48935 85.5164 5.83381 86.2058 5.35369C86.8952 4.87358 87.72 4.63352 88.6802 4.63352C89.6528 4.63352 90.4806 4.87666 91.1639 5.36293C91.8471 5.84304 92.3026 6.4955 92.5304 7.32031H92.6781C92.9674 6.50781 93.4906 5.85843 94.2477 5.37216C95.0109 4.87973 95.9127 4.63352 96.9529 4.63352C98.2763 4.63352 99.3504 5.05516 100.175 5.89844C101.006 6.73556 101.422 7.92353 101.422 9.46236V19H97.4977V10.2379C97.4977 9.45005 97.2884 8.85914 96.8699 8.4652C96.4513 8.07126 95.9281 7.87429 95.3002 7.87429C94.5862 7.87429 94.0292 8.10204 93.6291 8.55753C93.229 9.00687 93.0289 9.60085 93.0289 10.3395V19H89.2157V10.1548C89.2157 9.45928 89.0157 8.9053 88.6156 8.4929C88.2217 8.08049 87.7015 7.87429 87.0552 7.87429C86.6182 7.87429 86.2243 7.98509 85.8734 8.20668C85.5287 8.42211 85.2548 8.7268 85.0517 9.12074C84.8485 9.50852 84.747 9.96401 84.747 10.4872V19H80.8137ZM110.992 19.277C109.533 19.277 108.277 18.9815 107.225 18.3906C106.178 17.7936 105.372 16.9503 104.806 15.8608C104.239 14.7652 103.956 13.4695 103.956 11.9737C103.956 10.5149 104.239 9.23461 104.806 8.13281C105.372 7.03101 106.169 6.17235 107.197 5.55682C108.231 4.94129 109.444 4.63352 110.835 4.63352C111.77 4.63352 112.641 4.78433 113.448 5.08594C114.26 5.38139 114.968 5.82765 115.571 6.42472C116.181 7.02178 116.655 7.77273 116.993 8.67756C117.332 9.57623 117.501 10.6288 117.501 11.8352V12.9155H105.526V10.478H113.798C113.798 9.91169 113.675 9.41004 113.429 8.97301C113.183 8.53598 112.841 8.19437 112.404 7.94815C111.973 7.69579 111.472 7.5696 110.899 7.5696C110.302 7.5696 109.773 7.7081 109.311 7.98508C108.856 8.25592 108.499 8.62216 108.24 9.08381C107.982 9.5393 107.849 10.0471 107.843 10.6072V12.9247C107.843 13.6264 107.972 14.2327 108.231 14.7436C108.496 15.2545 108.868 15.6484 109.348 15.9254C109.828 16.2024 110.398 16.3409 111.056 16.3409C111.493 16.3409 111.893 16.2794 112.257 16.1562C112.62 16.0331 112.931 15.8485 113.189 15.6023C113.448 15.3561 113.645 15.0545 113.78 14.6974L117.418 14.9375C117.233 15.8116 116.855 16.5748 116.282 17.2273C115.716 17.8736 114.983 18.3783 114.085 18.7415C113.192 19.0985 112.161 19.277 110.992 19.277ZM126.159 19V0.0909085H133.73C135.121 0.0909085 136.281 0.297111 137.211 0.709517C138.14 1.12192 138.839 1.69437 139.307 2.42685C139.775 3.15317 140.009 3.99029 140.009 4.93821C140.009 5.67685 139.861 6.32623 139.565 6.88636C139.27 7.44034 138.864 7.89583 138.347 8.25284C137.836 8.60369 137.251 8.85298 136.592 9.00071V9.18537C137.313 9.21615 137.987 9.41927 138.614 9.79474C139.248 10.1702 139.762 10.6965 140.156 11.3736C140.55 12.0445 140.747 12.8447 140.747 13.7741C140.747 14.7775 140.498 15.6731 139.999 16.4609C139.507 17.2427 138.777 17.8613 137.811 18.3168C136.845 18.7723 135.654 19 134.238 19H126.159ZM130.157 15.7315H133.416C134.53 15.7315 135.343 15.5192 135.854 15.0945C136.365 14.6636 136.62 14.0911 136.62 13.3771C136.62 12.8539 136.494 12.3923 136.241 11.9922C135.989 11.5921 135.629 11.2782 135.161 11.0504C134.7 10.8227 134.149 10.7088 133.509 10.7088H130.157V15.7315ZM130.157 8.00355H133.121C133.669 8.00355 134.155 7.90814 134.58 7.71733C135.01 7.52036 135.349 7.24337 135.595 6.88636C135.848 6.52936 135.974 6.10156 135.974 5.60298C135.974 4.91974 135.731 4.36884 135.244 3.95028C134.764 3.53172 134.081 3.32244 133.195 3.32244H130.157V8.00355ZM147.319 19.2678C146.414 19.2678 145.608 19.1108 144.9 18.7969C144.192 18.4768 143.632 18.0059 143.219 17.3842C142.813 16.7564 142.61 15.9747 142.61 15.0391C142.61 14.2512 142.755 13.5895 143.044 13.054C143.333 12.5185 143.727 12.0876 144.226 11.7614C144.724 11.4351 145.291 11.1889 145.925 11.0227C146.565 10.8565 147.236 10.7396 147.937 10.6719C148.762 10.5857 149.427 10.5057 149.932 10.4318C150.436 10.3518 150.803 10.2348 151.03 10.081C151.258 9.92708 151.372 9.69934 151.372 9.39773V9.34233C151.372 8.75758 151.187 8.30516 150.818 7.98508C150.455 7.66501 149.938 7.50497 149.267 7.50497C148.559 7.50497 147.996 7.66193 147.577 7.97585C147.159 8.28362 146.882 8.6714 146.746 9.1392L143.108 8.84375C143.293 7.98201 143.656 7.23722 144.198 6.60938C144.74 5.97538 145.438 5.48911 146.294 5.15057C147.156 4.80587 148.153 4.63352 149.285 4.63352C150.073 4.63352 150.827 4.72585 151.547 4.91051C152.274 5.09517 152.917 5.38139 153.477 5.76918C154.043 6.15696 154.49 6.65554 154.816 7.26491C155.142 7.86813 155.305 8.59138 155.305 9.43466V19H151.575V17.0334H151.464C151.237 17.4766 150.932 17.8674 150.55 18.206C150.169 18.5384 149.71 18.8 149.175 18.9908C148.639 19.1754 148.02 19.2678 147.319 19.2678ZM148.445 16.5533C149.024 16.5533 149.535 16.4394 149.978 16.2116C150.421 15.9777 150.769 15.6638 151.021 15.2699C151.273 14.8759 151.4 14.4297 151.4 13.9311V12.4261C151.277 12.5062 151.107 12.58 150.892 12.6477C150.683 12.7093 150.446 12.7678 150.181 12.8232C149.916 12.8724 149.652 12.9186 149.387 12.9616C149.122 12.9986 148.882 13.0324 148.667 13.0632C148.205 13.1309 147.802 13.2386 147.457 13.3864C147.113 13.5341 146.845 13.7341 146.654 13.9865C146.463 14.2327 146.368 14.5405 146.368 14.9098C146.368 15.4453 146.562 15.8546 146.949 16.1378C147.343 16.4148 147.842 16.5533 148.445 16.5533ZM164.764 19.277C163.312 19.277 162.062 18.9692 161.016 18.3537C159.976 17.732 159.175 16.8703 158.615 15.7685C158.061 14.6667 157.784 13.3987 157.784 11.9645C157.784 10.5118 158.064 9.23769 158.624 8.14204C159.191 7.04025 159.994 6.18158 161.034 5.56605C162.075 4.94437 163.312 4.63352 164.746 4.63352C165.983 4.63352 167.066 4.85819 167.996 5.30753C168.925 5.75686 169.661 6.38778 170.203 7.20028C170.744 8.01278 171.043 8.96686 171.098 10.0625H167.387C167.282 9.35464 167.005 8.78527 166.556 8.3544C166.112 7.91738 165.531 7.69886 164.811 7.69886C164.201 7.69886 163.669 7.86506 163.213 8.19744C162.764 8.52367 162.413 9.00071 162.161 9.62855C161.908 10.2564 161.782 11.0166 161.782 11.9091C161.782 12.8139 161.905 13.5833 162.151 14.2173C162.404 14.8513 162.758 15.3345 163.213 15.6669C163.669 15.9993 164.201 16.1655 164.811 16.1655C165.26 16.1655 165.663 16.0732 166.02 15.8885C166.383 15.7038 166.682 15.4361 166.916 15.0852C167.156 14.7282 167.313 14.3004 167.387 13.8018H171.098C171.037 14.8852 170.741 15.8393 170.212 16.6641C169.689 17.4827 168.965 18.1229 168.042 18.5845C167.119 19.0462 166.026 19.277 164.764 19.277ZM177.18 14.919L177.19 10.201H177.762L182.305 4.81818H186.82L180.717 11.946H179.784L177.18 14.919ZM173.616 19V0.0909085H177.55V19H173.616ZM182.48 19L178.307 12.8232L180.929 10.044L187.087 19H182.48ZM193.449 0.0909085L193.089 13.331H189.71L189.34 0.0909085H193.449ZM191.399 19.2401C190.79 19.2401 190.267 19.0246 189.83 18.5938C189.393 18.1567 189.177 17.6335 189.183 17.0241C189.177 16.4209 189.393 15.9039 189.83 15.473C190.267 15.0421 190.79 14.8267 191.399 14.8267C191.984 14.8267 192.498 15.0421 192.941 15.473C193.384 15.9039 193.609 16.4209 193.615 17.0241C193.609 17.4304 193.501 17.8028 193.292 18.1413C193.089 18.4737 192.821 18.7415 192.489 18.9446C192.156 19.1416 191.793 19.2401 191.399 19.2401Z"
              fill="#142535"
            />
          </svg>
          <svg width="153" height="49" viewBox="0 0 151 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.11 6.596C13.3887 6.46933 13.8193 6.33 14.402 6.178C15.01 6.00067 15.618 5.912 16.226 5.912C17.29 5.912 18.1767 6.07667 18.886 6.406C19.5953 6.71 20.026 7.166 20.178 7.774C20.4567 8.81267 20.71 9.788 20.938 10.7C21.1913 11.5867 21.432 12.448 21.66 13.284C21.888 14.0947 22.1033 14.9053 22.306 15.716C22.534 16.5267 22.7493 17.3753 22.952 18.262H23.142C23.37 16.7167 23.5727 15.2473 23.75 13.854C23.9273 12.4353 24.092 11.0547 24.244 9.712C24.396 8.344 24.548 7.00133 24.7 5.684C24.852 4.34133 25.004 2.986 25.156 1.618C26.0933 1.086 27.094 0.819999 28.158 0.819999C29.0953 0.819999 29.906 1.02267 30.59 1.428C31.274 1.83333 31.616 2.51733 31.616 3.48C31.616 4.03733 31.5527 4.83533 31.426 5.874C31.3247 6.88733 31.1727 8.02733 30.97 9.294C30.7927 10.5607 30.5773 11.8907 30.324 13.284C30.0707 14.6773 29.8047 16.0073 29.526 17.274C29.2473 18.5407 28.956 19.6933 28.652 20.732C28.3733 21.7453 28.1073 22.5307 27.854 23.088C27.474 23.4427 26.8533 23.734 25.992 23.962C25.1307 24.19 24.244 24.304 23.332 24.304C22.1413 24.304 21.128 24.152 20.292 23.848C19.4813 23.5187 18.9873 23.0627 18.81 22.48C18.4807 21.4667 18.126 20.2633 17.746 18.87C17.366 17.4767 16.9607 15.944 16.53 14.272C16.1753 15.9187 15.808 17.5273 15.428 19.098C15.048 20.6687 14.706 21.9987 14.402 23.088C14.022 23.4427 13.452 23.734 12.692 23.962C11.932 24.19 11.096 24.304 10.184 24.304C9.044 24.304 8.00533 24.152 7.068 23.848C6.156 23.5187 5.56067 23.0627 5.282 22.48C5.054 22.024 4.80067 21.3527 4.522 20.466C4.26867 19.554 4.00267 18.528 3.724 17.388C3.44533 16.2227 3.154 14.9687 2.85 13.626C2.57133 12.2833 2.30533 10.9407 2.052 9.598C1.824 8.25533 1.60867 6.95067 1.406 5.684C1.20333 4.392 1.05133 3.214 0.95 2.15C1.30467 1.82067 1.79867 1.51667 2.432 1.238C3.06533 0.959333 3.74933 0.819999 4.484 0.819999C5.44667 0.819999 6.232 1.03533 6.84 1.466C7.47333 1.87133 7.866 2.568 8.018 3.556C8.42333 6.14 8.75267 8.29333 9.006 10.016C9.28467 11.7387 9.5 13.1573 9.652 14.272C9.82933 15.3613 9.956 16.21 10.032 16.818C10.108 17.426 10.184 17.9073 10.26 18.262H10.45C10.678 17.2487 10.8933 16.3113 11.096 15.45C11.2987 14.5887 11.5013 13.7273 11.704 12.866C11.932 11.9793 12.16 11.042 12.388 10.054C12.616 9.04067 12.8567 7.888 13.11 6.596ZM51.5236 14.766C51.5236 16.3367 51.2829 17.7427 50.8016 18.984C50.3203 20.2 49.6363 21.226 48.7496 22.062C47.8883 22.898 46.8496 23.5313 45.6336 23.962C44.4176 24.3927 43.0623 24.608 41.5676 24.608C40.0729 24.608 38.7176 24.38 37.5016 23.924C36.2856 23.468 35.2343 22.822 34.3476 21.986C33.4863 21.1247 32.8149 20.086 32.3336 18.87C31.8523 17.654 31.6116 16.286 31.6116 14.766C31.6116 13.2713 31.8523 11.916 32.3336 10.7C32.8149 9.484 33.4863 8.458 34.3476 7.622C35.2343 6.76067 36.2856 6.102 37.5016 5.646C38.7176 5.19 40.0729 4.962 41.5676 4.962C43.0623 4.962 44.4176 5.20267 45.6336 5.684C46.8496 6.14 47.8883 6.79867 48.7496 7.66C49.6363 8.496 50.3203 9.522 50.8016 10.738C51.2829 11.954 51.5236 13.2967 51.5236 14.766ZM38.2236 14.766C38.2236 16.3113 38.5149 17.502 39.0976 18.338C39.7056 19.1487 40.5416 19.554 41.6056 19.554C42.6696 19.554 43.4803 19.136 44.0376 18.3C44.6203 17.464 44.9116 16.286 44.9116 14.766C44.9116 13.246 44.6203 12.0807 44.0376 11.27C43.4549 10.434 42.6316 10.016 41.5676 10.016C40.5036 10.016 39.6803 10.434 39.0976 11.27C38.5149 12.0807 38.2236 13.246 38.2236 14.766ZM71.7892 14.766C71.7892 16.3367 71.5486 17.7427 71.0672 18.984C70.5859 20.2 69.9019 21.226 69.0152 22.062C68.1539 22.898 67.1152 23.5313 65.8992 23.962C64.6832 24.3927 63.3279 24.608 61.8332 24.608C60.3386 24.608 58.9832 24.38 57.7672 23.924C56.5512 23.468 55.4999 22.822 54.6132 21.986C53.7519 21.1247 53.0806 20.086 52.5992 18.87C52.1179 17.654 51.8772 16.286 51.8772 14.766C51.8772 13.2713 52.1179 11.916 52.5992 10.7C53.0806 9.484 53.7519 8.458 54.6132 7.622C55.4999 6.76067 56.5512 6.102 57.7672 5.646C58.9832 5.19 60.3386 4.962 61.8332 4.962C63.3279 4.962 64.6832 5.20267 65.8992 5.684C67.1152 6.14 68.1539 6.79867 69.0152 7.66C69.9019 8.496 70.5859 9.522 71.0672 10.738C71.5486 11.954 71.7892 13.2967 71.7892 14.766ZM58.4892 14.766C58.4892 16.3113 58.7806 17.502 59.3632 18.338C59.9712 19.1487 60.8072 19.554 61.8712 19.554C62.9352 19.554 63.7459 19.136 64.3032 18.3C64.8859 17.464 65.1772 16.286 65.1772 14.766C65.1772 13.246 64.8859 12.0807 64.3032 11.27C63.7206 10.434 62.8972 10.016 61.8332 10.016C60.7692 10.016 59.9459 10.434 59.3632 11.27C58.7806 12.0807 58.4892 13.246 58.4892 14.766ZM83.6263 23.848C83.3476 23.924 82.9169 24 82.3343 24.076C81.7516 24.152 81.1816 24.19 80.6243 24.19C79.4589 24.19 78.5849 24 78.0023 23.62C77.4196 23.2147 77.1283 22.3787 77.1283 21.112V15.982C76.4949 15.0447 75.8109 14.006 75.0763 12.866C74.3416 11.726 73.6196 10.5607 72.9103 9.37C72.2009 8.17933 71.5423 7.014 70.9343 5.874C70.3263 4.70867 69.8323 3.64467 69.4523 2.682C69.7816 2.226 70.2249 1.808 70.7823 1.428C71.3649 1.048 72.0743 0.857999 72.9103 0.857999C73.8983 0.857999 74.6963 1.06067 75.3043 1.466C75.9376 1.87133 76.5329 2.63133 77.0903 3.746L80.2443 10.092H80.4723C80.8269 9.30667 81.1309 8.59733 81.3843 7.964C81.6629 7.30533 81.9289 6.65933 82.1823 6.026C82.4356 5.36733 82.7016 4.696 82.9803 4.012C83.2589 3.30267 83.5756 2.492 83.9303 1.58C84.3863 1.352 84.8929 1.17467 85.4503 1.048C86.0076 0.921332 86.5396 0.857999 87.0463 0.857999C87.9329 0.857999 88.6803 1.09867 89.2883 1.58C89.9216 2.036 90.2383 2.73267 90.2383 3.67C90.2383 3.974 90.1749 4.34133 90.0483 4.772C89.9216 5.20267 89.6303 5.86133 89.1743 6.748C88.7183 7.60933 88.0469 8.78733 87.1603 10.282C86.2989 11.7767 85.1209 13.7273 83.6263 16.134V23.848ZM97.2511 19.896C97.6818 19.896 98.1504 19.858 98.6571 19.782C99.1891 19.6807 99.5818 19.554 99.8351 19.402V16.362L97.0991 16.59C96.3898 16.6407 95.8071 16.7927 95.3511 17.046C94.8951 17.2993 94.6671 17.6793 94.6671 18.186C94.6671 18.6927 94.8571 19.1107 95.2371 19.44C95.6424 19.744 96.3138 19.896 97.2511 19.896ZM96.9471 4.962C98.3151 4.962 99.5564 5.10133 100.671 5.38C101.811 5.65867 102.774 6.08933 103.559 6.672C104.37 7.22933 104.99 7.95133 105.421 8.838C105.852 9.69933 106.067 10.7253 106.067 11.916V20.428C106.067 21.0867 105.877 21.6313 105.497 22.062C105.142 22.4673 104.712 22.822 104.205 23.126C102.558 24.114 100.24 24.608 97.2511 24.608C95.9084 24.608 94.6924 24.4813 93.6031 24.228C92.5391 23.9747 91.6144 23.5947 90.8291 23.088C90.0691 22.5813 89.4738 21.9353 89.0431 21.15C88.6378 20.3647 88.4351 19.4527 88.4351 18.414C88.4351 16.666 88.9544 15.3233 89.9931 14.386C91.0318 13.4487 92.6404 12.866 94.8191 12.638L99.7971 12.106V11.84C99.7971 11.1053 99.4678 10.586 98.8091 10.282C98.1758 9.95267 97.2511 9.788 96.0351 9.788C95.0724 9.788 94.1351 9.88933 93.2231 10.092C92.3111 10.2947 91.4878 10.548 90.7531 10.852C90.4238 10.624 90.1451 10.282 89.9171 9.826C89.6891 9.34467 89.5751 8.85067 89.5751 8.344C89.5751 7.68533 89.7271 7.166 90.0311 6.786C90.3604 6.38067 90.8544 6.03867 91.5131 5.76C92.2478 5.48133 93.1091 5.27867 94.0971 5.152C95.1104 5.02533 96.0604 4.962 96.9471 4.962ZM129.373 23.202C129.018 23.5567 128.499 23.8227 127.815 24C127.156 24.2027 126.358 24.304 125.421 24.304C124.484 24.304 123.597 24.1647 122.761 23.886C121.925 23.6073 121.241 22.936 120.709 21.872L116.947 14.196C116.567 13.4107 116.225 12.676 115.921 11.992C115.617 11.2827 115.288 10.472 114.933 9.56L114.705 9.598C114.806 10.966 114.857 12.3593 114.857 13.778C114.882 15.1967 114.895 16.59 114.895 17.958V23.848C114.616 23.924 114.186 24 113.603 24.076C113.046 24.152 112.488 24.19 111.931 24.19C111.374 24.19 110.88 24.152 110.449 24.076C110.018 24 109.664 23.848 109.385 23.62C109.106 23.392 108.891 23.088 108.739 22.708C108.587 22.3027 108.511 21.7833 108.511 21.15V2.15C108.866 1.64333 109.41 1.26333 110.145 1.01C110.88 0.756666 111.665 0.63 112.501 0.63C113.438 0.63 114.325 0.781999 115.161 1.086C116.022 1.36467 116.706 2.02333 117.213 3.062L121.013 10.738C121.393 11.5233 121.735 12.2707 122.039 12.98C122.343 13.664 122.672 14.462 123.027 15.374L123.217 15.336C123.116 13.968 123.052 12.6 123.027 11.232C123.002 9.864 122.989 8.496 122.989 7.128V0.972C123.268 0.895999 123.686 0.819999 124.243 0.743998C124.826 0.667999 125.396 0.63 125.953 0.63C127.068 0.63 127.916 0.832666 128.499 1.238C129.082 1.618 129.373 2.42867 129.373 3.67V23.202ZM150.922 14.766C150.922 16.3367 150.681 17.7427 150.2 18.984C149.719 20.2 149.035 21.226 148.148 22.062C147.287 22.898 146.248 23.5313 145.032 23.962C143.816 24.3927 142.461 24.608 140.966 24.608C139.471 24.608 138.116 24.38 136.9 23.924C135.684 23.468 134.633 22.822 133.746 21.986C132.885 21.1247 132.213 20.086 131.732 18.87C131.251 17.654 131.01 16.286 131.01 14.766C131.01 13.2713 131.251 11.916 131.732 10.7C132.213 9.484 132.885 8.458 133.746 7.622C134.633 6.76067 135.684 6.102 136.9 5.646C138.116 5.19 139.471 4.962 140.966 4.962C142.461 4.962 143.816 5.20267 145.032 5.684C146.248 6.14 147.287 6.79867 148.148 7.66C149.035 8.496 149.719 9.522 150.2 10.738C150.681 11.954 150.922 13.2967 150.922 14.766ZM137.622 14.766C137.622 16.3113 137.913 17.502 138.496 18.338C139.104 19.1487 139.94 19.554 141.004 19.554C142.068 19.554 142.879 19.136 143.436 18.3C144.019 17.464 144.31 16.286 144.31 14.766C144.31 13.246 144.019 12.0807 143.436 11.27C142.853 10.434 142.03 10.016 140.966 10.016C139.902 10.016 139.079 10.434 138.496 11.27C137.913 12.0807 137.622 13.246 137.622 14.766Z"
              fill="#142535"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

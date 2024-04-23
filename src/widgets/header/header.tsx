import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../shared/lib/store/store";
import { InputText } from "../../shared/ui/formItems/InputText";
import HeaderStyles from "../header/header.scss";
import containerClasses from "../../app/styles/styles.scss";

export const Header = () => {
    const props = useSelector((state: RootState) => state.user)
    // @ts-ignore
    // @ts-ignore
    return (
        <header className="header">
            <div>
                <div className={HeaderStyles["header__wrapper"]}>
                    <div className={HeaderStyles.header__left}>
                        <div className={HeaderStyles.header__left__logo}>
                            <svg  viewBox="0 0 214 228" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7313 4.1281C21.133 6.46137 29.9443 15.4355 39.3563 24.2301C48.7683 32.8453 55.9775 40.0246 55.3768 40.0246C54.9762 40.0246 48.9686 38.0503 42.1599 35.5375C28.3422 30.512 27.7415 30.3325 27.7415 32.6658C27.7415 34.4606 47.1663 49.3577 53.3742 52.4089C59.3819 55.4601 54.9762 55.8191 41.7594 53.3063C34.7504 52.0499 28.5425 51.332 28.142 51.691C26.9405 52.5884 45.364 63.3573 55.3768 67.4854C63.5872 70.8956 64.188 71.434 59.7824 71.9725C56.9788 72.152 52.5732 72.8699 49.9698 73.4083C45.364 74.3058 45.364 74.4852 48.9686 76.639C55.7773 80.9466 74.2008 84.8952 87.0171 84.8952C98.8322 84.8952 125.867 78.9723 125.867 76.2801C125.867 73.5878 92.6243 48.2808 63.9877 28.8967C35.3512 9.69205 32.7479 8.07671 24.9379 3.94862L17.1279 0L19.7313 4.1281ZM36.9532 13.6407C41.5591 16.6919 47.3665 20.6405 49.9698 22.0763C52.3729 23.5122 57.7798 27.2813 61.5847 30.1531C65.5898 33.2043 75.4023 40.0246 83.4125 45.2296C91.4228 50.6141 97.6307 55.1011 97.2302 55.4601C94.8271 57.6139 63.5872 40.7425 51.3716 30.6915C47.3665 27.4608 42.3601 23.5122 40.3576 21.8969C33.5489 16.3329 25.3384 7.71775 27.1407 7.71775C27.9417 7.71775 32.5476 10.41 36.9532 13.6407ZM49.1688 40.563C53.7747 42.7168 63.5872 47.7423 70.7964 51.691C80.8092 57.0754 83.2123 59.0497 80.2084 59.4087C75.2021 60.1266 51.3716 49.1782 41.7594 41.9989C33.5489 35.5375 37.1535 34.9991 49.1688 40.563ZM99.8335 62.2804C104.84 65.1521 110.047 68.7418 111.448 69.9982C112.85 71.2545 115.253 72.3314 116.455 72.3314C117.856 72.3314 117.256 73.2289 115.453 74.3058C112.85 75.5621 110.647 75.3826 107.443 73.5878C104.84 72.152 96.6294 69.1008 89.2199 66.947C81.6102 64.7932 76.0031 62.6394 76.6038 62.1009C77.6051 61.024 96.8297 66.229 102.437 68.9213C104.64 69.9982 106.642 70.3571 107.243 69.9982C107.643 69.4597 102.237 65.6906 95.0274 61.5625C87.8182 57.2549 81.8105 53.4858 81.8105 53.1268C81.8105 52.0499 89.8207 56.178 99.8335 62.2804ZM49.1688 57.0754C52.5732 57.6139 70.5962 63.3573 78.4061 66.0496C84.8143 68.3828 82.211 71.0751 74.401 69.9982C66.7913 68.9213 37.7543 57.2549 37.7543 55.2806C37.7543 54.5627 39.5566 54.5627 41.5591 55.2806C43.7619 55.8191 47.1663 56.7165 49.1688 57.0754ZM106.842 75.0237C108.044 75.3826 103.638 75.7416 97.4304 75.7416C91.2225 75.9211 85.6153 75.2032 85.0146 74.4852C84.0133 73.0494 102.036 73.5878 106.842 75.0237ZM85.4151 76.998C95.6281 77.7159 104.439 78.9723 105.04 79.6902C106.642 82.0235 69.3946 81.6645 61.5847 79.3313C50.9711 76.1006 49.3691 73.4083 58.7811 74.6647C63.1867 75.3826 75.2021 76.2801 85.4151 76.998Z"
                                    fill="black"/>
                                <path
                                    d="M194.955 39.3066C186.144 41.8194 173.728 44.6911 167.32 45.5885C153.902 47.3833 144.891 51.1525 141.887 55.9985C138.883 61.2035 139.484 62.8188 142.888 58.5112C146.293 54.2037 154.503 51.5114 168.521 50.0756C173.728 49.5371 178.934 48.6397 179.936 48.1013C183.741 46.1269 181.938 48.4602 174.929 55.2806C171.325 59.0497 165.718 67.3059 162.914 73.7673C156.906 87.049 152.501 93.5103 142.087 103.561C136.881 108.407 136.08 109.843 139.284 108.407C141.687 107.33 145.091 104.638 146.894 102.305C148.496 100.151 150.698 98.3564 151.499 98.5358C154.103 98.8948 161.512 88.3053 167.32 75.7416C174.128 60.665 185.543 49.8961 203.966 40.922C219.186 33.5632 216.983 33.2042 194.955 39.3066Z"
                                    fill="black"/>
                                <path
                                    d="M84.8142 97.2795C86.0157 99.2538 76.0029 106.792 73.8001 105.536C71.9978 104.638 33.9493 112.894 31.9467 114.51C29.5436 116.843 43.7618 115.048 52.7733 111.997C58.3805 110.202 65.5897 108.228 68.7937 107.51C74.6012 106.254 74.6012 106.433 65.7899 113.433C59.1815 118.638 57.7797 120.612 60.383 120.792C62.5858 120.792 63.3868 120.074 62.5858 118.638C61.5845 117.202 62.1853 117.023 64.7886 117.92C66.7912 118.638 70.3958 117.92 73.1994 116.305C75.8027 114.689 78.8065 113.971 79.6075 114.51C80.6088 115.048 83.8129 112.894 86.6165 109.664C89.4201 106.433 91.8231 104.818 91.8231 106.074C91.8231 109.664 81.8104 120.792 78.6063 120.792C77.0042 120.792 75.8027 121.51 75.8027 122.587C75.8027 125.817 78.8065 124.561 85.6152 118.638C92.2236 112.715 94.0259 109.843 96.6293 100.51C97.8308 95.8437 97.6305 95.6642 90.8219 95.6642C86.8167 95.6642 84.0132 96.3821 84.8142 97.2795ZM86.0157 105.356C82.8116 108.946 67.7925 117.92 66.7912 117.023C65.7899 115.946 86.4162 101.228 87.6178 102.126C88.0183 102.485 87.4175 103.92 86.0157 105.356Z"
                                    fill="black"/>
                                <path
                                    d="M71.7978 99.2538C68.9942 99.9717 59.1817 102.484 49.7697 104.818C30.1446 109.484 13.7237 115.228 21.7339 114.689C24.5375 114.51 28.5426 113.433 30.7454 112.356C32.9482 111.459 44.9635 108.228 57.3794 105.536C69.7952 102.843 80.4088 99.9717 81.0095 99.0743C82.2111 97.1 78.6065 97.2795 71.7978 99.2538Z"
                                    fill="black"/>
                                <path
                                    d="M100.434 113.074C97.4303 117.741 92.6242 125.638 89.8206 130.663C86.216 137.125 81.6101 141.612 73.1994 146.637C66.1904 151.124 62.3856 154.355 63.5871 155.432C64.7887 156.509 68.3933 155.073 72.9991 152.022L80.4086 146.996L78.8065 151.304C76.4035 158.124 60.7835 187.2 54.7759 195.636C51.9723 199.944 49.9697 203.354 50.7708 203.354C52.9736 203.354 69.3945 178.765 80.4086 159.201C89.2198 143.407 93.2249 138.202 98.8321 135.15C107.443 130.484 108.044 128.689 99.8334 132.458C96.6293 134.073 93.8257 134.971 93.8257 134.432C93.8257 134.073 97.0298 127.074 100.835 119.176C104.64 111.1 107.243 104.638 106.842 104.638C106.442 104.638 103.438 108.407 100.434 113.074Z"
                                    fill="black"/>
                                <path
                                    d="M43.3614 168.175C27.1407 182.534 12.5221 200.841 4.71208 216.635C-2.09661 230.635 -1.49584 231.532 6.31413 218.61C17.5284 200.123 25.7389 190.431 44.9635 173.38C61.3844 158.842 64.5885 154.893 59.7824 154.893C58.9814 154.893 51.5719 160.816 43.3614 168.175Z"
                                    fill="black"/>
                            </svg>

                        </div>
                        <div className={HeaderStyles.header__left__title}>
                            <p>Art of Joy</p>
                        </div>
                    </div>
                    <div className="center">
                        <nav className={HeaderStyles.header__navbar}>
                            <div className={HeaderStyles.header__navbar__menu_item}>
                                <a href="#">Каталог</a>
                                <div className={HeaderStyles.header__dropdown_catalog}>
                                    <div className="dropdown_catalog__container">
                                        <p>1 Пункт</p>
                                        <p>2 Пункт</p>
                                        <p>3 Пункт</p>
                                        <p>4 Пункт</p>
                                    </div>
                                </div>
                            </div>
                            <div className={HeaderStyles.header__navbar__menu_item}>
                                <a href="#">О магазине</a>
                            </div>
                            <div className={HeaderStyles.header__navbar__menu_item}>
                                <a href="#">Доставка и оплата</a>
                            </div>
                            <div className={HeaderStyles.header__navbar__menu_item}>
                                <a href="#">Контакты</a>
                            </div>
                        </nav>
                    </div>
                    <div className={HeaderStyles.header__right}>
                        <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.8125 22.7344C24.0938 22.9844 24.0938 23.25 23.8125 23.5312L22.7812 24.5625C22.5 24.8438 22.2344 24.8438 21.9844 24.5625L16.3125 18.8906C16.1875 18.7656 16.125 18.6406 16.125 18.5156V17.8594C14.2813 19.4531 12.1562 20.25 9.75 20.25C7.0625 20.25 4.76563 19.2969 2.85938 17.3906C0.953125 15.4844 0 13.1875 0 10.5C0 7.8125 0.953125 5.51563 2.85938 3.60938C4.76563 1.70312 7.0625 0.75 9.75 0.75C12.4375 0.75 14.7344 1.70312 16.6406 3.60938C18.5469 5.51563 19.5 7.8125 19.5 10.5C19.5 12.9062 18.7031 15.0313 17.1094 16.875H17.7656C17.9219 16.875 18.0469 16.9375 18.1406 17.0625L23.8125 22.7344ZM4.45312 15.7969C4.45312 15.7969 4.82031 16.1641 5.55469 16.8984C6.28906 17.6328 7.6875 18 9.75 18C11.8125 18 13.5781 17.2656 15.0469 15.7969C16.5156 14.3281 17.25 12.5625 17.25 10.5C17.25 8.4375 16.5156 6.67188 15.0469 5.20312C13.5781 3.73437 11.8125 3 9.75 3C7.6875 3 5.92188 3.73437 4.45312 5.20312C2.98437 6.67188 2.25 8.4375 2.25 10.5C2.25 12.5625 2.98437 14.3281 4.45312 15.7969Z"
                                fill="#333333"/>
                        </svg>
                        <svg width="33" height="33" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="64" height="64" fill="url(#pattern0_3_143)"/>
                            <defs>
                                <pattern id="pattern0_3_143" patternContentUnits="objectBoundingBox" width="1"
                                         height="1">
                                    <use xlinkHref="#image0_3_143" transform="scale(0.015625)"/>
                                </pattern>
                                <image id="image0_3_143" width="64" height="64"
                                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2aPWgUQRSAv41nSBG1EWPEXgQVNKZTLEQ9Imonnj8oFhFLkyNaWCoImnjBKr2/hZW2Yin+HUEtVEwhiUYRLXJR8CeeDLyDYdw79m69vZ3zfTCwzM28eW/nzZs3sweKoiiKoiiKoihKIgRAH3AIOCXFPG+S39qWlUABeAeUqxTz22WghzYiAEaA+RqGu6UE5NvBI7qAGyEGzkr9KDAmz7Mh7a6LDC8JQox/AuwEOkLam7pdQDHkJXjpCSOOIWamF0Xol5FYYfcdxjNWAHOWAcbV62XciQkmiHpDwXH7KDMf5glFx4O8IHC2OrPmGyVryZnxJRZstpR+XyXgRcX0/WDJM8lS6jloKWx2gbjcsuQdwAPylsIX/4G8S77tBsOWwkb5uIxa8obwgNz/vgT6nJQ3bhD8aMnbiIfbYDaGrAFLzrQv2yBypK0oXpSkpl5Mn8mY2WRqUuFCAzKuOKmwd3cEeedAMx7REzKO8WW5NfKOQI6yZWc5ZGschwcctzflqk9r36Ur5CWUJb29KQecMdnq7GhfKdd8vhCpEEhyVKrjSmxO3N7bmQ+jR2Z7pobh0xLtTRBtWwJJaHLWtXhO6tpqxhVF+YtOoB/YDwwCp6UMSl2/tGkr1gPngcfA9whboGnzCDgHrMNTFgPHgRd17P3VynPgWIMHqpZwGJiqYsxv4CVwG5gALkiZkLpX0ias7xu5b0wtq4C7IYqXJJ/fAyyLIMe02StpcFj2eAfoJWXsAL44in6SANcdQ67pe0Zk2bI/A9tJCUeBH5ZyC3IhEsdwlyVynF5wguURWsxJZ82+BbY2cbxtcl6wY8oJWsRu4KelzDNgdQLj9jrfDH8B+0iYDc4/Ph6ImybFUuChNf685BuJkJEvvpXBp1p0fF0OvLb0mJT8o+mctQb9CqyhdawFvln6GN2aSocYnabLyiFnKcT5EBOJpzLYvSQGi4D588V90cno1nS6gS0pu6zslC0yyUCsKIqiKIqC1/wBS7dHkKLZdVsAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="32" height="32" fill="url(#pattern0_3_144)"/>
                            <defs>
                                <pattern id="pattern0_3_144" patternContentUnits="objectBoundingBox" width="1"
                                         height="1">
                                    <use xlinkHref="#image0_3_144" transform="scale(0.03125)"/>
                                </pattern>
                                <image id="image0_3_144" width="32" height="32"
                                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO2WMU4CQRiFX6U2WlBIYo0eADmAeACVBEu8gFxALwAXgAvABaChhMRCGrU2SEWHndJQQf7kbbIxO8z88k+3XzLNzMubN7sz/wyQo+cAQBPAFMCK7RXAI8eicgbgA8DG0d6picIhJ5CJFgDqAI7ZagA+OfYW60s0U5MXMsYLHNvwd5gzpbms3MU9NbInzPmluXxyFyfU/Ow72WjHRvtvE88gjiJMnjTZyF5OKV7+6U9MfGTpluwTby/nFM8MA3yxrxQS4DJ1nq0CJPWjHBKgSvHYMMCEfVchAW4pHsCOIT1vQsQPFPcMA/Tp2dCU3I5hgK6mRD9T3DIM0KbnU4i4pREHolpUN8KNpvqtfc2GCUS1sYcUy3G04k5ztCcUS0Gy4tpR3DJJ3nxSkq2opN6MXuYUy6VkxQU95VLy8k1x0TBA0XHFZ7KO+CARby8vEQOId04O0mwBmKjJw0AtZUsAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>


                    </div>
                </div>
            </div>
        </header>
    )

};

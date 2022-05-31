import React from 'react';
import {Flex, Section, styleVariables, useMediaQuery} from "../../common";
import {Border, Left, LinkItem, Links, Call} from "./style";


export const Header = () => {
    const isDesktop = useMediaQuery(styleVariables.desktop);
    return (
        <Section as="header">
            <Flex justifyContent={isDesktop ? "center" : null}>
                <Border>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Left>
                            {isDesktop && <span>Наши контакты:</span>}
                            <Links>
                                <LinkItem>
                                    <a href="/">
                                        <svg className="instagram icon" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 34 34">
                                            <rect width="34" height="34" rx="4" className="instagram-rect-1"/>
                                            <rect width="34" height="34" rx="4" className="instagram-rect-2"/>
                                            <rect x="0.8" y="0.8" width="32.4" height="32.4" rx="3.2" stroke="white"
                                                  strokeWidth="1.6"/>
                                            <circle cx="16.5" cy="17.5" r="7.65" stroke="white" strokeWidth="1.7"/>
                                            <circle cx="26.75" cy="6.75" r="1.75" fill="white"/>
                                            <defs>
                                                <radialGradient id="paint0_radial_35_174" cx="0" cy="0" r="1"
                                                                gradientUnits="userSpaceOnUse"
                                                                gradientTransform="translate(28.73 38.59) rotate(-105.945) scale(44.5543 66.2694)">
                                                    <stop offset="0.197635" stopColor="#F50B5E"/>
                                                    <stop offset="0.52034" stopColor="#DF0897"/>
                                                    <stop offset="0.768785" stopColor="#962FBF"/>
                                                    <stop offset="0.933441" stopColor="#4F5BD5"/>
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_35_174" cx="0" cy="0" r="1"
                                                                gradientUnits="userSpaceOnUse"
                                                                gradientTransform="translate(11.39 34) rotate(-54.9721) scale(22.2135 24.2973)">
                                                    <stop offset="0.09375" stopColor="#FEDA75"/>
                                                    <stop offset="0.475046" stopColor="#FA7E1E"/>
                                                    <stop offset="1" stopColor="#FA7E1E" stopOpacity="0"/>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="/">
                                        <svg className="icon vk" viewBox="0 0 34 34"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.8" y="0.8" width="32.4" height="32.4" rx="3.2" stroke="white"
                                                  strokeWidth="1.6"/>
                                            <path
                                                d="M5.9659 10C4.69175 10 3.72171 11.252 4.07243 12.4839C4.98698 15.6937 6.34326 18.8369 8.3677 21.3098C10.3899 23.7804 13.1269 25.5717 16.6275 25.9269C17.7929 26.0445 18.7962 25.0945 18.7962 23.9446V21.6449C18.7962 21.5007 18.8961 21.3986 19.0071 21.3963C19.0271 21.3941 19.0448 21.3941 19.0559 21.3941C19.4577 21.3941 20.2835 21.898 21.0093 22.6816C21.733 23.4629 22.3745 24.433 22.683 24.9702C23.0338 25.5762 23.6842 25.9424 24.3767 25.9424H27.147C28.5255 25.9424 29.4489 24.3864 28.7741 23.1788C27.7131 21.2831 25.5998 19.4096 24.541 18.4751C26.4789 16.3463 27.7641 14.0289 28.3324 12.4928C28.7608 11.3296 27.8773 10.0244 26.6276 10.0244H24.6498C23.7907 10.0244 22.9916 10.4417 22.6631 11.1121C21.1248 14.2642 19.7529 15.4229 18.7873 16.2576V11.98C18.7873 10.9123 17.9016 10.0311 16.8384 10.0311L13.3755 10.0244C12.2745 10.0222 11.5908 11.3851 12.2501 12.2686L12.9182 13.1632L12.9205 13.1654C13.0359 13.3163 13.0958 13.4961 13.0958 13.6848L13.1091 17.252C11.7329 15.8003 10.2368 12.7237 9.78392 11.3518C9.52199 10.5483 8.76282 10.0089 7.92597 10.0067H7.92375L5.9659 10ZM5.9659 11.7048L7.92153 11.7092C8.0414 11.7114 8.13019 11.7758 8.1657 11.8824C8.72509 13.5872 10.199 16.8347 12.0659 18.6527C12.5498 19.1255 13.2623 19.221 13.8128 18.999C14.3655 18.7748 14.8139 18.1932 14.8139 17.5117V17.5095L14.8006 13.6826C14.8006 13.1254 14.6186 12.5838 14.2834 12.1399V12.1376L13.9771 11.7292L16.8362 11.7336C16.9849 11.7359 17.0825 11.8313 17.0825 11.9778V16.2997C17.0825 17.6826 18.8251 18.4773 19.8728 17.5739H19.875C20.834 16.7437 22.5343 15.2631 24.1947 11.8602C24.2324 11.7803 24.1992 11.727 24.652 11.727H26.6276C26.743 11.727 26.7763 11.7825 26.7341 11.9001C26.2502 13.2054 25.016 15.4828 23.1869 17.454C22.6231 18.0622 22.6453 19.0656 23.2846 19.6294C24.2835 20.5129 26.4633 22.5417 27.2846 24.009C27.3601 24.1444 27.3024 24.2376 27.147 24.2376H24.3767C24.2813 24.2376 24.2036 24.191 24.1614 24.1178C23.7929 23.4763 23.1159 22.4463 22.2591 21.5206C21.4022 20.5972 20.3834 19.6893 19.0559 19.6893C19.0182 19.6893 18.9871 19.6893 18.9627 19.6893H18.9583C17.9016 19.7204 17.0914 20.6172 17.0914 21.6427V23.9424C17.0914 24.12 16.956 24.2465 16.7984 24.231C13.7751 23.9247 11.4931 22.4374 9.68403 20.2287C7.87713 18.0201 6.58522 15.0788 5.71063 12.0156C5.66401 11.8446 5.76834 11.7048 5.96368 11.7048H5.9659Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="/">
                                        <svg className="icon telegram" viewBox="0 0 34 34"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.8" y="0.8" width="32.4" height="32.4" rx="3.2" stroke="white"
                                                  strokeWidth="1.6"/>
                                            <path
                                                d="M25.6879 7.00147C25.4443 7.01215 25.2073 7.07993 24.9935 7.16553C24.7819 7.25056 23.5638 7.77048 21.765 8.53956C19.9662 9.30864 17.6279 10.3101 15.3099 11.3032C10.6741 13.2894 6.11852 15.2437 6.11852 15.2437L6.15173 15.231C6.15173 15.231 5.87678 15.3229 5.59802 15.5171C5.45864 15.6142 5.30868 15.7396 5.18591 15.9224C5.06313 16.1052 4.97337 16.3642 5.0072 16.6382C5.12601 17.6006 6.12341 17.8735 6.12341 17.8735L6.12731 17.8755L10.5785 19.3989C10.692 19.7775 11.9285 23.9048 12.2006 24.7788C12.3508 25.262 12.4914 25.5408 12.6381 25.731C12.7115 25.8261 12.7884 25.8998 12.8734 25.9536C12.9072 25.975 12.9427 25.9911 12.9779 26.0054C12.9786 26.0057 12.9791 26.005 12.9799 26.0054C12.9842 26.0073 12.9882 26.0075 12.9925 26.0093L12.9808 26.0064C12.989 26.0097 12.9971 26.0152 13.0052 26.0181C13.0211 26.0236 13.0308 26.0234 13.0511 26.0278C13.5609 26.2058 13.9828 25.8755 13.9828 25.8755L14.0004 25.8618L16.7347 23.3257L21.1722 26.7857L21.2279 26.811C22.0046 27.1559 22.7071 26.9635 23.0961 26.647C23.4851 26.3304 23.6381 25.9224 23.6381 25.9224L23.6547 25.8794L26.9154 8.88428C26.9988 8.50407 27.0107 8.17541 26.932 7.87842C26.8533 7.58144 26.6621 7.32327 26.4222 7.18018C26.1823 7.03709 25.9314 6.99079 25.6879 7.00147ZM25.7142 8.01807C25.8131 8.01349 25.8864 8.0248 25.9095 8.03858C25.9326 8.05236 25.943 8.05055 25.9652 8.13428C25.9874 8.21802 25.9994 8.39439 25.9388 8.67042L25.9369 8.67628L22.6947 25.5728C22.687 25.5898 22.6195 25.7461 22.4652 25.8716C22.3078 25.9996 22.1328 26.0996 21.6683 25.9048L16.8158 22.1206L16.6791 22.0132L16.6761 22.0161L15.225 20.9273L23.3802 11.3325C23.4429 11.259 23.4829 11.1689 23.4955 11.0731C23.508 10.9773 23.4925 10.8799 23.4509 10.7927C23.4093 10.7055 23.3433 10.6323 23.2609 10.5818C23.1785 10.5313 23.0833 10.5058 22.9867 10.5083C22.8923 10.5108 22.8006 10.5399 22.722 10.5923L10.9213 18.4595L6.46325 16.9331C6.46325 16.9331 6.02057 16.6868 5.99938 16.5151C5.99821 16.5056 5.99298 16.5142 6.01598 16.48C6.03899 16.4457 6.09681 16.3879 6.1693 16.3374C6.31429 16.2364 6.47985 16.1753 6.47985 16.1753L6.49645 16.1694L6.51305 16.1626C6.51305 16.1626 11.0688 14.2082 15.7045 12.2222C18.0223 11.2291 20.3602 10.2284 22.1586 9.45948C23.9565 8.69079 25.2556 8.13749 25.3656 8.09327C25.4908 8.04312 25.6153 8.02265 25.7142 8.01807ZM20.306 13.4048L14.1215 20.6812L14.1185 20.6841C14.1089 20.6957 14.0997 20.7078 14.0912 20.7202C14.0814 20.7338 14.0722 20.7478 14.0638 20.7622C14.0291 20.8212 14.0068 20.8867 13.9984 20.9546C13.9984 20.9559 13.9984 20.9572 13.9984 20.9585L13.1927 24.5815C13.1793 24.5424 13.17 24.5281 13.1556 24.4819V24.481C12.8997 23.6587 11.7331 19.7664 11.5716 19.228L20.306 13.4048ZM14.8197 21.8735L15.931 22.7075L14.2982 24.2212L14.8197 21.8735Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </LinkItem>
                            </Links>
                        </Left>
                        <Call href="tel:+79045918331">

                            {isDesktop ? <span>Позвонить</span> : <img src="/img/svg/phone.svg" alt="Телефон"/>}
                        </Call>
                    </Flex>
                </Border>
            </Flex>
        </Section>
    );
};


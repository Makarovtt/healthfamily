import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../UI/Button';

function MobileNav({ active, clickButtonMobile, adress, phone }) {
    return (
        <WraperMobileNav active={active}>
            <List>
                <Logo src="/logo.svg" alt="logo" />

                <WraperGeolocation>
                    <i>
                        <svg width="24" height="39" viewBox="0 0 38 61" fill="var(--secondary-two)" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.56629 5.76377C9.27715 2.05291 14.1376 0.196533 18.9923 0.196533C23.8603 0.196533 28.7226 2.05291 32.4334 5.76377C39.8552 13.1836 39.8552 25.2149 32.4334 32.6328C32.4334 32.6328 18.9923 45.8004 18.9923 61.001C18.9923 45.8004 5.56629 32.6328 5.56629 32.6328C-1.85543 25.213 -1.85543 13.1817 5.56629 5.76377ZM18.998 28.6978C24.245 28.6978 28.4984 24.4443 28.4984 19.1973C28.4984 13.9504 24.245 9.69694 18.998 9.69694C13.7511 9.69694 9.49762 13.9504 9.49762 19.1973C9.49762 24.4443 13.7511 28.6978 18.998 28.6978Z" />
                        </svg>
                    </i>
                    <p>
                        {adress}
                    </p>
                </WraperGeolocation>

                <WraperPhone>
                    <div className="wraper-phone__wraper">
                        <i>
                            <svg width="22" height="22" viewBox="0 0 35 35" fill="var(--secondary-two)" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.9255 27.1185C34.8265 26.8203 34.1967 26.3808 33.0364 25.8013C32.7221 25.6187 32.2742 25.3704 31.6946 25.0555C31.1146 24.7406 30.5881 24.4504 30.116 24.1852C29.6431 23.9201 29.2 23.6633 28.786 23.4151C28.7198 23.3653 28.5126 23.2206 28.1646 22.9797C27.8163 22.7396 27.5225 22.5614 27.2817 22.4452C27.0415 22.3296 26.8052 22.2715 26.5732 22.2715C26.2418 22.2715 25.8278 22.5078 25.3308 22.9797C24.8338 23.4523 24.3779 23.9657 23.9638 24.5213C23.5496 25.0767 23.1104 25.59 22.6468 26.0624C22.1825 26.5349 21.8011 26.7709 21.5031 26.7709C21.3536 26.7709 21.167 26.7292 20.9435 26.6469C20.7201 26.5641 20.5502 26.4932 20.4335 26.4359C20.3179 26.3775 20.1194 26.2619 19.8375 26.0873C19.555 25.9133 19.398 25.818 19.3649 25.8013C17.0945 24.5416 15.1474 23.0998 13.5231 21.4763C11.8993 19.8518 10.4572 17.905 9.19776 15.6345C9.18121 15.6013 9.0857 15.4438 8.91182 15.1623C8.73768 14.8804 8.62161 14.6818 8.56362 14.5655C8.50563 14.4496 8.4352 14.2797 8.35248 14.056C8.26976 13.8323 8.22823 13.646 8.22823 13.4967C8.22823 13.1986 8.46445 12.8173 8.93681 12.3532C9.40908 11.8894 9.92296 11.4501 10.478 11.0361C11.0334 10.6221 11.5467 10.1662 12.0192 9.66925C12.4915 9.17203 12.7276 8.75794 12.7276 8.42658C12.7276 8.19472 12.6696 7.95834 12.5537 7.71813C12.4377 7.47739 12.2596 7.18364 12.0192 6.83546C11.7787 6.48747 11.6337 6.28051 11.5839 6.21391C11.3356 5.79992 11.079 5.35667 10.8135 4.88434C10.548 4.4121 10.2583 3.88571 9.94325 3.30577C9.62849 2.72609 9.38008 2.27849 9.19758 1.96366C8.61787 0.80387 8.17877 0.173869 7.88038 0.0747887C7.76432 0.0250747 7.59018 0 7.3584 0C6.91068 0 6.32661 0.0827116 5.60576 0.248657C4.88464 0.414342 4.31721 0.588123 3.90284 0.770698C3.07419 1.11852 2.19591 2.12935 1.26774 3.80282C0.422552 5.36024 0 6.90172 0 8.42614C0 8.87322 0.0289944 9.30819 0.0869832 9.73116C0.144972 10.1537 0.248586 10.6302 0.397911 11.1606C0.546976 11.6908 0.66722 12.0847 0.758121 12.3412C0.849109 12.5979 1.01898 13.0576 1.26766 13.7207C1.51598 14.3836 1.66531 14.7895 1.71502 14.9386C2.295 16.5627 2.98277 18.0126 3.77815 19.2887C5.08682 21.4098 6.87272 23.6018 9.1348 25.8639C11.397 28.1259 13.5887 29.9116 15.7101 31.2207C16.9861 32.0159 18.4366 32.7036 20.0606 33.284C20.2098 33.3334 20.6156 33.4824 21.2783 33.7316C21.9413 33.98 22.4013 34.1499 22.658 34.2411C22.9147 34.3323 23.3087 34.4526 23.8385 34.6019C24.3695 34.7513 24.8456 34.8549 25.2681 34.9133C25.691 34.9705 26.126 35 26.5732 35C28.0977 35 29.6393 34.5772 31.1971 33.7322C32.8705 32.8044 33.8811 31.926 34.2292 31.0968C34.4122 30.6829 34.5855 30.1153 34.7512 29.3942C34.9174 28.6735 35 28.0896 35 27.642C35.0005 27.4092 34.9755 27.2356 34.9255 27.1185Z" />
                            </svg>
                        </i>


                        <a href="tel:88512413030">{phone}</a>

                    </div>
                </WraperPhone>
                <WraperButton>
                    <Button onClick={clickButtonMobile}>Заказать звонок</Button>
                </WraperButton>

            </List>
        </WraperMobileNav>
    )
}

export default MobileNav;

const WraperMobileNav = styled.div`
    position: fixed;
    right: ${({ active }) => active ? '0' : '-100%'};
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: var(--back-gradient);
    transition-duration: .5s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const List = styled.div`
    
`;

const WraperButton = styled.div`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WraperPhone = styled.div`

    margin-top: 15px;

    .wraper-phone__wraper {
        display: flex;
        align-items: center;
        padding: 5px;

        a {
            color:var(--primery);
            font-family: 'Secondary';
            font-size: 18px;
            font-weight: 900;
        }
    }

    

    i {
        margin-right: 15px;
    }

    
`;

const WraperGeolocation = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    i {
        margin-right: 15px;
    }

    p {
        color:var(--primery);
        font-family: 'Secondary';
        font-size: 16px;
        font-weight: 600;
        max-width: 250px;
    }

    
`;





const Logo = styled.img`

`;

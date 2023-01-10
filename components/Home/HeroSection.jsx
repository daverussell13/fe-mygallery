import styles from "./Styles/HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container pt-3">
          <div className="row">
            <div className="col-6 p-0 d-flex justify-content-end align-items-center">
              <div
                className="d-flex flex-column"
                style={{
                  gap: "15px",
                  maxWidth: "560px",
                }}
              >
                <h1 className={styles.hero_title}>Amet minim mollit non.</h1>
                <h2 className={styles.hero_subtitle}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  Amet minim mollit non
                </h2>
                <div className={styles.hero_info}>
                  <div className="d-flex" style={{ gap: "20px" }}>
                    <div className={styles.hero_info_icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 24 24"
                        style={{
                          fill: "#82AAE3",
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path d="M20.56,3.34a1,1,0,0,0-1-.08l-17,8a1,1,0,0,0-.57.92,1,1,0,0,0,.6.9L8,15.45v6.72L13.84,18l4.76,2.08a.93.93,0,0,0,.4.09,1,1,0,0,0,.52-.15,1,1,0,0,0,.48-.79l1-15A1,1,0,0,0,20.56,3.34ZM18.1,17.68l-5.27-2.31L16,9.17,8.35,13.42,5.42,12.13,18.89,5.79Z" />
                      </svg>
                    </div>
                    <div className="d-flex flex-column">
                      <div className={styles.hero_info_title}>5M +</div>
                      <div className={styles.hero_info_description}>
                        Downloaded
                      </div>
                    </div>
                  </div>
                  <div className="d-flex" style={{ gap: "20px" }}>
                    <div className={styles.hero_info_icon}>
                      <svg
                        width="34"
                        height="34"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 13.999 13 14a2 2 0 0 1 1.995 1.85L15 16v1.5C14.999 21 11.284 22 8.5 22c-2.722 0-6.335-.956-6.495-4.27L2 17.5v-1.501c0-1.054.816-1.918 1.85-1.995L4 14ZM15.22 14H20c1.054 0 1.918.816 1.994 1.85L22 16v1c-.001 3.062-2.858 4-5 4a7.16 7.16 0 0 1-2.14-.322c.336-.386.607-.827.802-1.327A6.19 6.19 0 0 0 17 19.5l.267-.006c.985-.043 3.086-.363 3.226-2.289L20.5 17v-1a.501.501 0 0 0-.41-.492L20 15.5h-4.051a2.957 2.957 0 0 0-.595-1.34L15.22 14H20h-4.78ZM4 15.499l-.1.01a.51.51 0 0 0-.254.136.506.506 0 0 0-.136.253l-.01.101V17.5c0 1.009.45 1.722 1.417 2.242.826.445 2.003.714 3.266.753l.317.005.317-.005c1.263-.039 2.439-.308 3.266-.753.906-.488 1.359-1.145 1.412-2.057l.005-.186V16a.501.501 0 0 0-.41-.492L13 15.5l-9-.001ZM8.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm9 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm-9-.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm9 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Z"
                          fill="#82aae3"
                        />
                      </svg>
                    </div>
                    <div className="d-flex flex-column">
                      <div className={styles.hero_info_title}>1M +</div>
                      <div className={styles.hero_info_description}>
                        User&apos;s Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/Assets/hero-image.png"
                  alt="hero-image"
                  width={522}
                  height={490}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        id="wave"
        style={{
          transform: "rotate(180deg)",
          transition: "0.3s",
          maxHeight: "300px",
        }}
        viewBox="0 0 1440 220"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(234, 253, 252, 1)" offset="0%" />
            <stop stopColor="rgba(234, 253, 252, 0)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,88L60,99C120,110,240,132,360,146.7C480,161,600,169,720,150.3C840,132,960,88,1080,69.7C1200,51,1320,59,1440,80.7C1560,103,1680,139,1800,128.3C1920,117,2040,59,2160,58.7C2280,59,2400,117,2520,150.3C2640,183,2760,191,2880,194.3C3000,198,3120,198,3240,168.7C3360,139,3480,81,3600,58.7C3720,37,3840,51,3960,55C4080,59,4200,51,4320,51.3C4440,51,4560,59,4680,51.3C4800,44,4920,22,5040,33C5160,44,5280,88,5400,113.7C5520,139,5640,147,5760,139.3C5880,132,6000,110,6120,102.7C6240,95,6360,103,6480,106.3C6600,110,6720,110,6840,117.3C6960,125,7080,139,7200,121C7320,103,7440,51,7560,44C7680,37,7800,73,7920,106.3C8040,139,8160,169,8280,168.7C8400,169,8520,139,8580,124.7L8640,110L8640,220L8580,220C8520,220,8400,220,8280,220C8160,220,8040,220,7920,220C7800,220,7680,220,7560,220C7440,220,7320,220,7200,220C7080,220,6960,220,6840,220C6720,220,6600,220,6480,220C6360,220,6240,220,6120,220C6000,220,5880,220,5760,220C5640,220,5520,220,5400,220C5280,220,5160,220,5040,220C4920,220,4800,220,4680,220C4560,220,4440,220,4320,220C4200,220,4080,220,3960,220C3840,220,3720,220,3600,220C3480,220,3360,220,3240,220C3120,220,3000,220,2880,220C2760,220,2640,220,2520,220C2400,220,2280,220,2160,220C2040,220,1920,220,1800,220C1680,220,1560,220,1440,220C1320,220,1200,220,1080,220C960,220,840,220,720,220C600,220,480,220,360,220C240,220,120,220,60,220L0,220Z"
        />
      </svg>
    </>
  );
}

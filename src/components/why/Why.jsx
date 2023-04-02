import WhyCard from "../whyCard/WhyCard";
import "./why.css";
import CheckIcon from "@mui/icons-material/Check";
// import { color } from "@mui/system";

const Why = () => {
  return (
    <div className="why">
      <h1 data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">Why CloudAge?</h1>
      <p data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
        At CloudAge, we believe that data can make what is impossible today,
        possible tomorrow. <br />
        We empower people to transform complex data into clear and actionable
        insights.
      </p>

      <div className="whyCardWrapper">
        <WhyCard  data-aos="zoom-in"
        url={"/edge"}
          title={"Edge"}
          description={
            "Ingest, curate, and analyse real-time streaming data with Cloudera DataFlow (CDF)"
          }
        />
        <WhyCard
        url={"/datawarehouse"}
          title={"Data Warehouse"}
          description={
            "Bring together data from new and diverse sources with Cloudera Data Warehouse."
           }  data-aos="flip-left"
        />
        <WhyCard
        url={"/contact"}
          title={"Need Help?"}
          description={"Please fill in your detail will get back to you soon"}
        />
        <WhyCard
        url={"/ai"}

          title={"AI"}
          description={
            "Build, deploy, ML and AI apps, anywhere, with CloudAge machine learning offerings"
          }
        />
        <WhyCard   data-aos="zoom-in"
          title={"Cloud"}
          url={"/cloud"}
          description={
            "With the cloud, you can easily deploy your application in multiple physical locations around the world."
          }
        />
        <div className="whyCard-cloud-age">
          <h1>
            CloudAge <br />
            Program
          </h1>
          <div className="cloud-age-lists">
            <div className="cloud-age-list">
              <span className="aaaa">
                <CheckIcon
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>Edge to AI & ML</p>
            </div>
            <div className="cloud-age-list">
              <span>
                <CheckIcon
                  sx={{ "&:hover": { color: "blue" } }}
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>Data Warehouse</p>
            </div>
            <div className="cloud-age-list">
              <span>
                <CheckIcon
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>Cloud Computing</p>
            </div>
            <div className="cloud-age-list">
              <span>
                <CheckIcon
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>CloudAge University</p>
            </div>
            <div className="cloud-age-list">
              <span>
                <CheckIcon
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>Professional Services</p>
            </div>
            <div className="cloud-age-list">
              <span>
                <CheckIcon
                  style={{
                    fontSize: "20px",
                    color: "#7A7A7A",
                    fontWeight: "700",
                  }}
                />
              </span>
              <p>Training & Deployment</p>

              {/* <CheckIcon sx={{ color: "white", backgroundColor: "green" }} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

import React from "react";
import { connect } from "react-redux";
import styles from "./style.scss";
import BackHome from "../../../components/BackHome";
import { getSumGetChannelCourseGroupData } from "../../../store/home";

/**
 * @constructor <Header/>
 * @description <头部>
 */

//return { otherCourseData: state.otherCourse.otherCourseData };
//queryList: state.worksDetail.getIn(["queryList"]).toJS(),
function mapStateToProps(state) {
  return {
    otherCourseData: state.getIn(["otherCourse","otherCourseData"]).toJS()
  };
 // return { otherCourseData: state.otherCourse.otherCourseData }
}

@connect(
  mapStateToProps,
  null
)
class Header extends React.Component {
  render() {
    if (this.props.otherCourseData.length === 0) return null;
    let { HeadImg, HostName } = this.props.otherCourseData[0].HostData;
    return (
      <div className={styles.header}>
        <div className={styles.head_img}>
          <img src={HeadImg} alt=""/>
          <p>{HostName}</p>
        </div>
        <div className={styles.right}>
          <BackHome/>
        </div>
      </div>
    );
  }
}

export default Header;


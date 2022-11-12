import RightArrow from "../assets/svg/rightArrow"
const styles = {
    button: `text-[#6188FF] whitespace-nowrap justify-between flex items-center cursor-pointer`
}

const MoreButton = () => {
    return (

        <div className={styles.button}>More<RightArrow /></div>
    )
}

export default MoreButton;
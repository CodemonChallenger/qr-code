import qrCode from "../assets/image-qr-code.png";

const QRCard = () => {
  return (
    <div className="max-w-[260px] bg-white rounded-md p-5 shadow-lg">
      <img src={qrCode} alt="QR Code" className="rounded-md" />
      <h2 className="my-4 font-bold text-xl text-center text-darkBlue">
        Improve your front-end skills by building projects
      </h2>
      <p className="text-grayishBlue text-center text-sm pb-4">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCard;

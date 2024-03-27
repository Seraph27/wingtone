"use client";

const Footer = () => {
  return (
    <div className="my-4 mx-24 flex content-end justify-between">  
      <div>
        <div>
          <h3><strong>WINGTONE INDUSTRIAL Co., LTD</strong></h3>
          <p>Guanmiao Factory:</p>
          <span></span>
          <p>No.291, Dongrong St., Guanmiao Dist., Tainan City 718, Taiwan</p>
          <span>Shanhua Factory:</span>
          <p>No.342, Xiao Xin Ying, Shanhua Dist., Tainan City 741, Taiwan</p>
          <p className="TelFax">TEL: +886-6-596-1234\n\n
            FAX: +886-6-596-1300</p>
          <p className="url"><strong>www.wingtone.com.tw</strong></p>
        </div>
      </div>
      <div className="border border-primary">
        <div className="flex justify-end"> 
          <iframe
            className="aspect-video min-w-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.3801535022135!2d120.31614327528196!3d23.119775912693818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7b6773ccbc2b%3A0x2a9e159bdf67e92e!2zVyDpgYvpgJrlt6Xmpa3ogqHku73mnInpmZDlhazlj7gt5ZaE5YyW5bug!5e0!3m2!1sen!2stw!4v1704629387958!5m2!1sen!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;

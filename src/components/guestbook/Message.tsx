import { IMsg } from '#type/index';

const Message = (msg: IMsg) => {
  return (
    <>
      <h1>{msg.title}</h1>
      <p>{msg.body}</p>
    </>
  );
};

export default Message;

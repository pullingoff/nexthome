import { IMsg } from '@type';

const Message = ({ msg }: any) => {
  return (
    <>
      <h1>{msg.title}</h1>
      <p>{msg.body}</p>
    </>
  );
};

export default Message;

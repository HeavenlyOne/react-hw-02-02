
const ContactList = ({ filtered, deleteContact }) => {
  // console.log(filtered)
  return (
    <ul>
      {filtered.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;

    // <ul>
    //   {contacts.map(({ name, id, number }) => (
    //     <li key={id}>
    //       {name}: {number}
    //     </li>
    //   ))}
    // </ul>;
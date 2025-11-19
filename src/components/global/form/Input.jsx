export default function Input({ name, errors, register }) {
  return (
    <input
      {...register(name, { required: "Обязательно к заполнению!" })}
      style={{
        color: errors.name ? "red" : "",
        border: errors.name ? "1px solid red" : "",
      }}
      type="text"
      placeholder="Обязательно к заполнению"
    />
  );
}

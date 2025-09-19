import { render, screen, fireEvent } from "@testing-library/react";
import Post from ".";

describe("PostComment", () => {
  it('deve renderizar o botão "Comentar"', () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("deve adicionar dois comentários corretamente", () => {
    render(<Post />);

    const inputComentario = screen.getByTestId("input-comentario");
    const botaoEnviar = screen.getByTestId("botao-enviar");

    fireEvent.change(inputComentario, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(botaoEnviar);

    fireEvent.change(inputComentario, {
      target: { value: "Segundo comentário" },
    });
    fireEvent.click(botaoEnviar);

    const comentarios = screen.getAllByTestId("comentario-item");

    expect(comentarios).toHaveLength(2);
    expect(comentarios[0].textContent).toBe("Primeiro comentário");
    expect(comentarios[1].textContent).toBe("Segundo comentário");
  });
});

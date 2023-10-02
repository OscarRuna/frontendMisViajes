import Joi from "joi";


export const schemaModificarUsuario = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": "Nombre debe ser de tipo texto",
    "string.min": "Mínimo 2 caracteres",
    "string.max": "Máximo 50 caracteres",
    "string.empty": "Nombre no puede estar vacío",
  }),
  password: Joi.string().allow("").min(6).max(20).messages({
    "string.base": "Password debe ser de tipo texto",
    "string.min": "Mínimo 6 caracteres",
    "string.max": "Máximo 20 caracteres",
  }),
  avatar: Joi.allow(""),
});

export const schemaRegistroUsuario = Joi.object({
  name: Joi.string().max(50).required().messages({
    "string.base": "Nombre debe ser de tipo texto",
    "string.max": "Máximo 50 caracteres",
    "string.empty": "Nombre no puede estar vacío",
    "any.required": "Nombre es obligatorio",
  }),
  email: Joi.string().min(5).max(80).required().messages({
    "string.base": "Email debe ser de tipo email",
    "string.min": "Mínimo 5 caracteres",
    "string.max": "Máximo 80 caracteres",
    "string.empty": "Email no puede estar vacío",
    "any.required": "Email es obligatorio",
  }),
  password: Joi.string().min(6).max(50).required().messages({
    "string.base": "Password debe ser de tipo texto",
    "string.min": "Mínimo 6 caracteres",
    "string.max": "Máximo 20 caracteres",
    "any.required": "Password es obligatorio",
    "string.empty": "Password no puede estar vacío",
  }),
  avatar: Joi.allow(""),
});

export const schemaAñadirCometnario = Joi.object({
  comentario: Joi.string().min(15).max(250).required().messages({
    "string.base": "Comentario debe ser de tipo texto",
    "string.min": "Mínimo 15 caracteres",
    "string.max": "Máximo 250 caracteres",
    "any.required": "Comentario es obligatorio",
    "string.empty": "Comentario no puede estar vacío",
  }),
});

export const schemaCrearEntradas = Joi.object({
  titulo: Joi.string().min(6).max(26).required().messages({
    "string.base": "Título debe ser de tipo texto",
    "string.min": "Mínimo 6 caracteres",
    "string.max": "Máximo 26 caracteres",
    "any.required": "Título es obligatorio",
    "string.empty": "Título no puede estar vacío",
  }),

  categoria: Joi.string().required().messages({
    "string.base": "Categoría debe ser de tipo texto",
    "any.required": "Categoría es obligatorio",
    "string.empty": "Categoría no puede estar vacío",
  }),

  lugar: Joi.string().min(2).max(100).required().messages({
    "string.base": "Lugar debe ser de tipo texto",
    "string.min": "Mínimo 2 caracteres",
    "string.max": "Máximo 100 caracteres",
    "any.required": "Lugar es obligatorio",
    "string.empty": "Lugar no puede estar vacío",
  }),

  texto: Joi.string().min(15).max(500).required().messages({
    "string.base": "Descripción debe ser de tipo texto",
    "string.min": "Mínimo 15 caracteres",
    "string.max": "Máximo 500 caracteres",
    "any.required": "Descripción es obligatorio",
    "string.empty": "No puede estar vacío",
  }),
  foto: Joi.array().min(1).max(5).required().messages({
    "array.base": "foto debe ser de tipo file",
    "array.min": "Mínimo 1 foto",
    "array.max": "Máximo 5 fotos",
    "any.required": "foto es obligatorio",
    "array.empty": "foto no puede estar vacío",
  }),
});

export const schemaLogin = Joi.object({
  email: Joi.string().required().messages({
    "string.base": "Email debe ser de tipo email",
    "string.empty": "Email no puede estar vacío",
    "any.required": "Email es obligatorio",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.base": "Password debe ser de tipo texto",
    "string.min": "Mínimo 6 caracteres",
    "string.max": "Máximo 20 caracteres",
    "any.required": "Password es obligatorio",
    "string.empty": "Password no puede estar vacío",
  }),
});

export const schemaModificarEntrada = Joi.object({
  titulo: Joi.string().min(6).max(26).required().messages({
    "string.base": "Título debe ser de tipo texto",
    "string.min": "Mínimo 6 caracteres",
    "string.max": "Máximo 26 caracteres",
    "any.required": "Título es obligatorio",
    "string.empty": "Título no puede estar vacío",
  }),
  categoria: Joi.string().required().messages({
    "string.base": "Categoría debe ser de tipo texto",
    "any.required": "Categoría es obligatorio",
    "string.empty": "Categoría no puede estar vacío",
  }),

  lugar: Joi.string().min(2).max(100).required().messages({
    "string.base": "Lugar debe ser de tipo texto",
    "string.min": "Mínimo 2 caracteres",
    "string.max": "Máximo 100 caracteres",
    "any.required": "Lugar es obligatorio",
    "string.empty": "Lugar no puede estar vacío",
  }),

  texto: Joi.string().min(15).max(500).required().messages({
    "string.base": "Descripción debe ser de tipo texto",
    "string.min": "Mínimo 15 caracteres",
    "string.max": "Máximo 500 caracteres",
    "any.required": "Descripción es obligatorio",
    "string.empty": "No puede estar vacío",
  }),
  foto: Joi.array().min(1).max(5).required().messages({
    "array.base": "foto debe ser de tipo file",
    "array.min": "Mínimo 1 foto",
    "array.max": "Máximo 5 fotos",
    "any.required": "Foto es obligatorio",
    "array.empty": "Foto no puede estar vacío",
  }),
});
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({ message: `Obteniendo Tarea ${params.id}`, task });
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json({
    message: `Se actualizo la Tarea ${params.id}`,
    taskUpdate,
  });
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({
      message: `Se elimino la Tarea ${params.id}`,
      taskRemoved,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "No se pudo eliminar la tarea",
      description: error.message,
    });
  }
}

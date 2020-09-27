import React from "react";
import { Flex, Box } from "@rebass/grid";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AppContainer, Row, OrderBox, Content } from "./style";
import {
  useAppDispatch,
  useAppState,
  addNewRow,
  deleteSelectedRow,
  updateSelectedRow,
  setAllRow,
} from "./app-context";
import Icons from "../../components/Icons";
import { ROWDATA } from "../../constants/rowConstant";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function AuthoringTool() {
  const { list } = useAppState();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (ROWDATA) {
      setAllRow(dispatch, ROWDATA);
    }
  }, [dispatch]);

  const deletRow = (id) => {
    deleteSelectedRow(dispatch, id);
  };

  const addRow = () => {
    const payload = {
      id: uuidv4(),
      title: "",
      indent: 0,
    };
    addNewRow(dispatch, payload);
  };

  const updateRow = (e, data) => {
    const { value } = e.target;
    const payload = {
      ...data,
      title: value.trim(),
    };
    updateSelectedRow(dispatch, payload);
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(list, result.source.index, result.destination.index);
    setAllRow(dispatch, items);
  };

  const downloadJSON = async () => {
    const json = JSON.stringify(list);
    const blob = new Blob([json], { type: "application/json" });
    const a = document.createElement("a");
    a.href = await URL.createObjectURL(blob);
    a.download = "ToddleStandard.json";
    a.click();
  };

  return (
    <AppContainer>
      <Flex alignItems="center" justifyContent="space-between" width={1}>
        <h3> Mathematics </h3>
        <button className="save" onClick={() => downloadJSON()}>
          <Icons glyph="download" size="16" viewBox="0 0 17 19" />
          Save
        </button>
      </Flex>
      <Flex alignItems="flex-start" width={1} className="row-header">
        <Box width={1 / 6}>
          <div className="title">Actions </div>
          <span className="helptext"> Move, Indent, Outdent, Delete</span>
        </Box>
        <Box width={1 / 6} />
        <Box width={4 / 6}>
          <div className="title">Standard</div>
          <span className="helptext"> the Text of Standard</span>
        </Box>
      </Flex>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width: "100%", maxHeight: "60vh", overflowY: "auto" }}
            >
              {list &&
                list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TableRow
                          data={item}
                          deleteRow={deletRow}
                          updateRow={updateRow}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="addBtn" onClick={() => addRow()}>
        <Icons glyph="plus" size="18" viewBox="0 0 18 18" />
        &nbsp;Add a standard
      </button>
    </AppContainer>
  );
}

export default AuthoringTool;

function TableRow({ data, deleteRow, updateRow }) {
  const { id, indentInfo, title } = data;
  const [indent, setindent] = React.useState(indentInfo);

  return (
    <Row>
      <Box width={1 / 6}>
        <Flex justifyContent="space-between" width="60%" alignItems="center">
          <Icons
            glyph="move"
            size="18"
            viewBox="0 0 18 18"
            tipText="Move"
            tipLocation="top"
          />
          <Icons
            glyph="left"
            size="16"
            viewBox="0 0 16 14"
            tipText="Outdent"
            tipLocation="top"
            onClick={() => setindent(indent > 0 ? indent - 1 : indent)}
          />
          <Icons
            glyph="right"
            size="16"
            viewBox="0 0 16 14"
            tipText="Indent"
            tipLocation="top"
            onClick={() => setindent(indent < 2 ? indent + 1 : indent)}
          />
          <Icons
            glyph="delete"
            size="16"
            viewBox="0 0 16 16"
            tipText="Delete"
            tipLocation="top"
            onClick={() => deleteRow(id)}
          />
        </Flex>
      </Box>
      <Box width={5 / 6}>
        <Flex
          alignItems="center"
          style={{ position: "relative", minHeight: "40px" }}
        >
          <OrderBox indent={indent} />
          <Content indent={indent}>
            <input
              type="text"
              placeholder="standard content here"
              defaultValue={title}
              autoFocus={!title}
              onChange={(e) => updateRow(e, data)}
            />
          </Content>
        </Flex>
      </Box>
    </Row>
  );
}

package ir.hatami.persian.calendar;

import javax.faces.application.ResourceDependencies;
import javax.faces.application.ResourceDependency;
import javax.faces.component.FacesComponent;
import javax.faces.component.UIInput;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import java.io.IOException;
import java.util.Map;

/**
 * @Author : Hamed Hatami
 */

@FacesComponent("ir.hatami.persian.calendar.PersianCalendar")
@ResourceDependencies({
        @ResourceDependency(name = "skins/aqua/theme.css", target = "head"),
        @ResourceDependency(name = "skins/calendar-blue.css", target = "head"),
        @ResourceDependency(name = "skins/calendar-system.css", target = "head"),
        @ResourceDependency(name = "jalali.js", target = "head"),
        @ResourceDependency(name = "calendar.js", target = "head"),
        @ResourceDependency(name = "calendar-setup.js", target = "head"),
        @ResourceDependency(name = "lang/calendar-fa.js", target = "head")
})
public class PersianCalendar extends UIInput {


    public PersianCalendar() {
        setRendererType(null);
    }

    @Override
    public String getFamily() {
        return "javax.faces.NamingContainer";
    }

    @Override
    public void encodeBegin(FacesContext context) throws IOException {
        ResponseWriter writer = context.getResponseWriter();
        String clientId = getClientId(context);
        encodeInputField(writer, clientId);
    }

    @Override
    public void decode(javax.faces.context.FacesContext context) {
        Map<String, String> requestMap = context.getExternalContext().getRequestParameterMap();
        String clientId = getClientId(context);
        try {
            String submittedValue = (String) requestMap.get(clientId);
            setSubmittedValue(submittedValue);
            setValid(true);
        } catch (NumberFormatException ex) {
            setSubmittedValue((String) requestMap.get(clientId));
        }
    }

    private void encodeInputField(ResponseWriter writer, String clientId)
            throws IOException {

        writer.startElement("input", this);
        writer.writeAttribute("name", clientId, "clientId");
        writer.writeAttribute("id", clientId, "clientId");

        Object value = getValue();
        if (value != null) {
            writer.writeAttribute("value", value.toString(), "value");
        }

        if (getAttributes().get("disabled") instanceof Boolean) {
            if (((Boolean) getAttributes().get("disabled")).booleanValue() == Boolean.TRUE) {
                writer.writeAttribute("disabled", Boolean.TRUE, "disabled");
            } else {
                writer.writeAttribute("disabled", Boolean.FALSE, "disabled");
            }
        }

        if (getAttributes().get("styleClass") instanceof String) {
            if (!getAttributes().get("styleClass").toString().isEmpty()) {
                writer.writeAttribute("class", getAttributes().get("styleClass").toString(), "class");
            }
        }

        if (getAttributes().get("style") instanceof String) {
            if (!getAttributes().get("style").toString().isEmpty()) {
                writer.writeAttribute("style", getAttributes().get("style").toString(), "style");
            }
        }

        writer.endElement("input");

        writer.write("<script type=\"text/javascript\">" + "Calendar.setup({"
                + "inputField     :" + "\"" + clientId + "\"," + "button         :"
                + "\"" + clientId + "\"," + "ifFormat       :    \"%Y/%m/%d\","
                + "dateType	   :	'jalali'," + "weekNumbers    : false" + "});"
                + "</script>");

    }


}
